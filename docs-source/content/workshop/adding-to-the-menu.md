---
title: "Adding to your Badge's menu"
weight: 10
date: 2017-11-03T09:45:33+01:00
draft: false
---

Next we're going to add the game we just made as a menu item inside
the existing badge software.

Wrap everything you've done into the following function on the right-hand
side of the IDE.

```
Badge.apps["Simon Game"] = function() {
  Badge.reset();
  setWatch(Badge.menu, BTNB, { repeat: 1, debounce: 50, edge: "rising" });
  
  // Your code
};
```

Now we need to get the badge back doing badgey stuff. disconnect the IDE 
from your badge, and pull the battery gently away from the PCB with a 
fingernail. When the display flickers off, let go and your badge will 
restart with the old code on it.

Now do the Konami code again - `UUDDLRLRBA`, go to `Make Connectable`,
and connect with the Web IDE. Simply **Copy & Paste** your code from the
right-hand side over to the left, **don't Upload**. If you upload, it'll
reset the device and upload your code as it did before.

This way, your code will now be loaded into RAM alongside the Badge's code.

Disconnect the IDE and press the `A` button on the badge to exit the
`Connectable` state. You'll now have a new menu item at the end of the list 
called `Simon Game`, and when you choose it it'll run your game!

**Note:** We've totally filled up the flash memory with all the Badge stuff,
so you won't be able to save your game like this and if you reset your badge
by removing the battery it'll disappear.

Instead, you'd have to upload and save just the game as was done in the
last step.
