---
title: "Sound"
weight: 5
date: 2017-11-03T09:45:33+01:00
draft: false
---

# Sound

It'd be nice if our game made some sounds. There's no speaker built into the
badge, so we're going to add one.

Get one of the gold coloured discs from the hacking bench - these are piezo
speakers of the type you'd find in digital watches.

Use the wire strippers and try and strip around 2cm of insulation off each of
the two wires. By careful - maybe try stripping 1cm first, then another cm,
as the wire is really delicate.

Twist each bit of wire so it makes a nice braid, then poke each through the
holes on the edge of the board marked 0 and 1 (the order doesn't matter) and
twist them around tightly as below. 0 and 1 correspond to pins `D0` and `D1`.

**Note:** You're welcome to solder the speaker on if you want to - it's just
quick and reversible to twist.

Now get a bit of double-sided tape and tape the speaker to the back of your 
badge. It makes it louder if it can vibrate something else.

Now you can test it - in the left-hand side of the IDE type:

```
digitalWrite(D0,0)
```

This sets pin `D0` to be connected to ground.

```
analogWrite(D1,0.5,{freq:1000})
```

This puts a 1kHz frequency on pin D1, and you should be able to hear
a really annoying high pitched beep.

Type this to turn it off:

```
digitalWrite(D1,0)
```

So now all we need is a handy function to do timed beeps:

```
function beep(freq, time, callback) {
  digitalWrite(D0,0);
  analogWrite(D1,0.5,{freq:freq});
  setTimeout(function() {
    digitalWrite(D1,0);
    if (callback) callback();
  }, time);
}
```

Which you can try with:

```
beep(700,1000)
```

For a 700Hz beep for 1 second, and so on...

For our Simon game we need a different beep for each corner, so let's make
a function for that.

```
function beepForCorner(corner, time) {
  var pitches = ["no_corner_0",
    500,
    600,
    700,
    800,
    900,
    1000
  ];
  beep(pitches[corner], time);
}
```

Which you can use with `beepForCorner(2,1000)`.

These pitches are totally un-musical, but if you were so inclined you could
look up some more pleasing notes at https://pages.mtu.edu/~suits/notefreqs.html
and use those frequencies instead.

## It's too quiet!

(optional!)

Unfortunately the piezo speakers we're using aren't really meant to run
off a voltage as low as we have on the badge (3V).

We're driving them with a square wave between 0V and 3V while `D0` is at 0V, 
so the total swing in voltage is 0V.

However, if we could make `D0` go to 3V when `D1` was at 0V and vice-versa,
we'd be able to get double the voltage swing - 6V!

The following code uses the NRF52LL library, which has a bit more info
in it: http://www.espruino.com/NRF52LL

Basically there's nothing built in to the Espruino interpreter to handle this,
so we have to set up the hardware that's on the chip ourself - which is
pretty low-level.

```

function beep(freq, time, callback) {
  var ll = require("NRF52LL");
  // set up D0 and D1 as outputs
  digitalWrite(D0,0);
  digitalWrite(D1,0);
  // create two 'toggle' tasks, one for each pin
  var t0 = ll.gpiote(6, {type:"task",pin:D0,lo2hi:1,hi2lo:1,initialState:0});
  var t1 = ll.gpiote(7, {type:"task",pin:D1,lo2hi:1,hi2lo:1,initialState:1});
  // create a timer that counts up to a value depending on the frequency
  var tmr = ll.timer(3,{cc:[500000/freq],cc0clear:1});
  // use two PPI to trigger toggle events
  ll.ppiEnable(6, tmr.eCompare[0], t0.tOut);
  ll.ppiEnable(7, tmr.eCompare[0], t1.tOut);
  // Manually trigger a task to start the timer
  poke32(tmr.tClear,1);
  poke32(tmr.tStart,1);
  setTimeout(function() {
    poke32(tmr.tStop,1);
    ll.ppiDisable(6);
    ll.ppiDisable(7);
    if (callback) callback();
  }, time);
}
```

This code uses a library that's dynamically loaded in by the IDE, so you'll
have to use the code on the **right-hand side of the IDE** and use the `Upload` button
in order to have it work correctly.
