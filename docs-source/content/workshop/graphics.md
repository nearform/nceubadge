---
title: "Graphics"
weight: 4
date: 2017-11-03T09:45:33+01:00
draft: false
---

The badge exposes the LCD via a built-in variable called `g`. This has 
a bunch of methods such as `drawLine` or `drawString` that can be accessed
(http://www.espruino.com/Graphics) however each command acts on an internal
memory buffer. To update the display itself you need to call `g.flip()`.

Try entering the following code on the left-hand side:

```
g.clear();
g.drawString("Hello World!");
g.flip();
```

The badge should now display the obvious 'Hello World'!

But what if we want to display our capacitance data? Enter the following
on the *left-hand side*.

```
function plotCap() {
  g.clear();  
  var caps = [1,2,3,4,5,6].map(c=>Badge.capSense(c));
  caps.forEach(
    (cap,x) => g.fillRect(x*21,64,(x+1)*21, 64-cap/1000)
  );
  g.flip();
}
setInterval(plotCap,50)
```

![Plot capacitance](/images/workshop_graphics1.jpg)

**Note:** This uses a whole bunch of battery power because of polling the
capacitive sense as well as updating the screen, and if left this way
could run the Badge's battery down in a few hours. When using the buttons
rather than capacitive sense, the hardware itself can detect the change
in the wire's voltage while the processor is asleep - you do that
using `setWatch` - which is super power efficient.

This is just displaying a few bars, but it would make more sense to display
the status on a hexagon that matched the badge itself:

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

function plotCap() {  
  var caps = [1,2,3,4,5,6].map(c=>Badge.capSense(c)>20000);
  plotBadge(caps);
}
```

![Plot corners](/images/workshop_graphics2.jpg)

We're using a separate `plotBadge` function here so we can use it
later to output the pattern we want the user to enter.

**Note:** because we're entering this on the left-hand side we
already have the interval from the last code we entered - just
re-entering `plotCap` will replace the old one and the code will magically
start working.
