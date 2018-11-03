---
title: "Making a Game"
weight: 6
date: 2017-11-03T09:45:33+01:00
draft: false
---

Ok, now we'll need to make two functions:

* A function to output a pattern
* A function to check the player's input against a pattern. 

These will take a simple array of numbers, which is the pattern
to output.

## Left -> Right

We've got enough code that we probably want to start using the
right-hand side of the IDE as a proper editor. No changes will take
effect until you press the `Upload` button, but when you upload it'll
blow away any previous changes you made on the left-hand side.

## Outputting a pattern

We've already got the `plotBadge` function from the Graphics section,
as well as `beepForCorner` from the Sound section. All we need to do
is call them at the right times. Copy `plotBadge` and the `beep` stuff onto
the right-hand side, as well as this - and then click the `Upload` button in
the middle of the screen.

```
// Show the given pattern
function showPattern(pattern, callback) {
  // Nothing left - finish
  if (!pattern.length) return callback();  
  // Shift off the first element - don't use shift as
  // that'd alter the initial array  
  var corner = pattern[0];
  pattern = pattern.slice(1);
  // Display a corner and beep
  plotBadge([corner==1, corner==2, corner==3, corner==4, corner==5, corner==6]);
  beepForCorner(corner, 1000);
  // clear screen after a timeout
  setTimeout(function() {    
    g.clear();
    g.flip();
    // go to next
    setTimeout(function() {
      showPattern(pattern, callback);
    }, 200);
  }, 1000);
}

showPattern([1,2,3,4], ()=>console.log("Done!"));
```

## Detecting the pattern

So now you need the following to detect the pattern sequence - it's a 
bit big, but there are comments below:

```
/* Wait for either a corner to be pressed (pressState=true)
or released (pressState=false), and report back what was
pressed in the callback */
function waitForPress(pressState, callback) {
  var intr = setInterval(function() {
    // Detect pressed corners
    var pressed = [1,2,3,4,5,6].map(c=>Badge.capSense(c)>20000);
    // Create a string of only the pressed corners
    pressed = pressed.map((x,i)=>x?i+1:"").join("");
    // Call the callback when something is either pressed or released
    if ((pressed!="") == pressState) {
      clearInterval(intr);
      callback(pressed);
    }
  },20);
}

// Draw big fullscreen, centered text
function plotText(txt) {
  g.clear();
  var size = 32;
  g.setFontVector(size);
  while (g.stringWidth(txt)>120) {
    g.setFontVector(--size);
  }
  g.drawString(txt,(128-g.stringWidth(txt))/2,(64-size)/2);
  g.setFontBitmap();
  g.flip();
}

// Repeatedly test for the correct pattern
function testPattern(pattern, callback) {
  // Nothing left - finish - I guess we passed
  if (!pattern.length) return callback(true);
  // Shift off the first element - don't use shift as
  // that'd alter the initial array  
  var corner = pattern[0];
  pattern = pattern.slice(1);
  // Wait for a press
  plotText("?");  
  waitForPress(true, function(pressedCorner) {
    // check our corner
    if (pressedCorner == corner) {
      plotText(corner);
      beepForCorner(corner, 1000);
      // Great! Next corner, after a delay and
      // the button is released
      setTimeout(function() {
        waitForPress(false, function() {        
          testPattern(pattern, callback);
        });
      }, 1000);
    } else {
      // Game over
      plotText("NO!");
      beep(200, 1000); // low beep
      setTimeout(function() {
        callback(false);
      }, 1000);
    }
  });
}


// Test this out
testPattern([1,2,3,4], x=>console.log("Done!",x));
```

## Sticking it together

So now it's reasonably easy to stick showing the pattern and testing
for the pattern together:

```
var pattern = [5,3,4];
showPattern(pattern, ()=>{
  testPattern(pattern, x=>console.log("Done!",x));
});
```

And finally, you can wrap the whole thing up so that after each successful
pattern it adds one more item to the end:

```
function randomCorner() {
  return 0|Math.min(1+Math.random()*6, 6);
}

function game(pattern) {
  // add a new corner
  pattern.push(randomCorner());
  // Show and test
  console.log("Trying ",pattern);
  showPattern(pattern, ()=>{
    testPattern(pattern, success=>{
      if (success) {
        plotText(":)");
        setTimeout(()=>game(pattern), 1000);
      } else {
        plotText("Game Over");
        // restart when A pressed
        setWatch(function() {
          console.log("Restarting");
          game([]);
        }, BTNA, {repeat:0, debounce:20, edge:"rising"});
      }
    });
  });
}

game([])
```

![Game over](/images/workshop_end.jpg)

## Finally!

And that's it! The finished game should look like this:

```
function plotBadge(presses) {
  g.clear();    
  // function to work out each corner's coordinates
  function corner(c,r) {
    var a = (c-2)*Math.PI/3;
    return [64+Math.sin(a)*40*r, 32-Math.cos(a)*30*r];
  }
  // draw a hexagon - a line to each corner in turn
  g.moveTo.apply(g,corner(6,1));
  [1,2,3,4,5,6].forEach(c=>g.lineTo.apply(g,corner(c,1)));
  // Draw a circle where pressed
  presses.forEach((hit,c) => {
    if (!hit) return;
    var coords = corner(c+1,0.8);
    g.fillCircle(coords[0],coords[1],5);
  });
  g.flip();
}

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

// Show the given pattern
function showPattern(pattern, callback) {
  // Nothing left - finish
  if (!pattern.length) return callback();  
  // Shift off the first element - don't use shift as
  // that'd alter the initial array  
  var corner = pattern[0];
  pattern = pattern.slice(1);
  // Display a corner and beep
  plotBadge([corner==1, corner==2, corner==3, corner==4, corner==5, corner==6]);
  beepForCorner(corner, 1000);
  // clear screen after a timeout
  setTimeout(function() {    
    g.clear();
    g.flip();
    // go to next
    setTimeout(function() {
      showPattern(pattern, callback);
    }, 200);
  }, 1000);
}

/* Wait for either a corner to be pressed (pressState=true)
or released (pressState=false), and report back what was
pressed in the callback */
function waitForPress(pressState, callback) {
  var intr = setInterval(function() {
    // Detect pressed corners
    var pressed = [1,2,3,4,5,6].map(c=>Badge.capSense(c)>20000);
    // Create a string of only the pressed corners
    pressed = pressed.map((x,i)=>x?i+1:"").join("");
    // Call the callback when something is either pressed or released
    if ((pressed!="") == pressState) {
      clearInterval(intr);
      callback(pressed);
    }
  },20);
}

// Draw big fullscreen, centered text
function plotText(txt) {
  g.clear();
  var size = 32;
  g.setFontVector(size);
  while (g.stringWidth(txt)>120) {
    g.setFontVector(--size);
  }
  g.drawString(txt,(128-g.stringWidth(txt))/2,(64-size)/2);
  g.setFontBitmap();
  g.flip();
}

// Repeatedly test for the correct pattern
function testPattern(pattern, callback) {
  // Nothing left - finish - I guess we passed
  if (!pattern.length) return callback(true);
  // Shift off the first element - don't use shift as
  // that'd alter the initial array  
  var corner = pattern[0];
  pattern = pattern.slice(1);
  // Wait for a press
  plotText("?");  
  waitForPress(true, function(pressedCorner) {
    // check our corner
    if (pressedCorner == corner) {
      plotText(corner);
      beepForCorner(corner, 1000);
      // Great! Next corner, after a delay and
      // the button is released
      setTimeout(function() {
        waitForPress(false, function() {        
          testPattern(pattern, callback);
        });
      }, 1000);
    } else {
      // Game over
      plotText("NO!");
      beep(200, 1000); // low beep
      setTimeout(function() {
        callback(false);
      }, 1000);
    }
  });
}

function randomCorner() {
  return 0|Math.min(1+Math.random()*6, 6);
}

function game(pattern) {
  // add a new corner
  pattern.push(randomCorner());
  // Show and test
  console.log("Trying ",pattern);
  showPattern(pattern, ()=>{
    testPattern(pattern, success=>{
      if (success) {
        plotText(":)");
        setTimeout(()=>game(pattern), 1000);
      } else {
        plotText("Game Over");
        // restart when A pressed
        setWatch(function() {
          console.log("Restarting");
          game([]);
        }, BTNA, {repeat:0, debounce:20, edge:"rising"});
      }
    });
  });
}

game([])
```
