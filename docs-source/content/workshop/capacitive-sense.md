---
title: "Capacitive Sense"
weight: 3
date: 2017-11-03T09:45:33+01:00
draft: false
---

# Capacitive Sense

To detect a press, we want to use the capacitive sense functionality on the badge.
Type `Badge.capSense(1)` on the left-hand side of the IDE. You can use tab-complete
to help you. You should get a number displayed in the region of about `10,000` - this
value depends on the capacitance on that corner of the badge.

Press your finger on the corner marked `1` and try again (up arrow, then enter)
- you should see a much higher value - probably over `100,000`.

We can read all 6 corners using ES6 arrow functions and `map`:

```
[1,2,3,4,5,6].map(c=>Badge.capSense(c))
```

Note that not all corners are identical - for instance the corner nearest the
Bluetooth module (corner 3) will probably read a bit less, because there's less
wire.

It's easy enough for us to just threshold the capacitance values to
return an array of boolean values. You can use up-arrow and left to
move the cursor and edit the last line (or even the mouse), **but
you need to get the cursor on the end of the line before you
hit enter or it'll create a newline rather than executing**:

```
[1,2,3,4,5,6].map(c=>Badge.capSense(c)>20000)
```

So at this point it'd be nice to use the display to show our values...
