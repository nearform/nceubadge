---
title: "FAQ"
weight: 10
date: 2017-11-07T15:30:33+01:00
draft: false
---

What follows are a few answers to common questions we've been asked at the conference:

## Fixing your badge

After uploading code, your badge might not work any more or might show the 'Espruino' logo.

To fix it, just disconnect and reconnect the battery. You can do that by pulling the edge of the battery away from the PCB using a finger nail.

If that doesn't fix the badge, you might need to go to the hacking bench and use the flashing tool there to rewrite the badge's JS firmware.

You can also disconect/reconnect the battery while holding BTNA *until the Espruino logo appears* to make the badge start up without loading any new code. It'll be connectable, but will be completely blank. 


## Saving your code

Espruino can save code in 2 ways - as raw JavaScript, or as a compressed 'RAM image' which is a bit like 'hibernate' - that's the default if you type `save()` (normally any code you upload goes straight into RAM).

Your main badge firmware is stored as raw JS, and there's not enough room to store that as well as saving anything else.

The easiest solution is to just turn on `Save On Send` on in the IDE's options - this switches to saving raw JS to the device's flash whenever you upload - the next upload will remove the badge's existing JavaScript.

If you want to use `save()` - the hibernate style of saving - just remove your badge's built-in JS firmware with `E.setBootCode()`. `save()` will then work great.
 

## Fixing your badge after the conference

We crammed as much JS code into the badge as we could, but that means that the original [main.js](https://github.com/nearform/nceubadge/blob/master/flasher/main.js) file can't be written using the normal IDE.

You have two options:

* Strip some code out of main.js, and write it with `Save on Send` set in the IDE's settings
* Use [flash_as_js.sh](https://github.com/nearform/nceubadge/blob/master/flasher/flash_as_js.sh) to turn the  badge firmware *into a large JavaScript file that writes directly into flash memory*. This is super nasty and slow - but it will restore your badge to default


## Graphics

You can draw to the display with `g.drawString/etc`, but it won't update immediately - you need to call `g.flip()` to send the contents of the offscreen buffer to the screen whenever you want an update.

### Images

The badge display is 128x64, 1 bit per pixel. All the images for the Badge slideshow are stored in a `Badge.badgeImages` variable which you can change.

There's a page here: https://nodeconfeubadge.org/web_bluetooth/badge_upload.html

Which you can use to add your own images to the badge (or just get the source code for a specific image).


## Adding to existing badge firmware

The original firmware is here: [main.js](https://github.com/nearform/nceubadge/blob/master/flasher/main.js)

Most functionality is stored in a `Badge` variable - you can overwrite/modify any part of it.

In the IDE, make sure `Settings → Communications → Reset Before Send` (and `Save on Send`) is UNCHECKED. You can then upload code from the right-hand side of the IDE without removing any of the badge's existing firmware.

For instance you can replace the 'Badge mode' by copying `Badge.badge` out of `main.js` and modifying it so that you no longer need to enter the Konami code (just the `B`) to get to the menu:

```
Badge.badge = () => {
 Badge.reset();
 var counter = 0;
 var timeout;
 function draw(n) {
  counter += n ? n : 0;
  if (counter < 0) counter = Badge.badgeImages.length - 1;
  if (counter >= Badge.badgeImages.length) counter = 0;
  g.clear();
  g.drawImage(Badge.badgeImages[counter]);
  g.flip();
  var delay = (counter==0) ? 20000 : 2500;
  if (timeout) clearTimeout(timeout);  
  timeout = setTimeout(e => { timeout = undefined; draw(1) }, delay);
 }
 draw(0);
 setWatch(e => Badge.menu(), BTNB, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => { draw(-1); k("U") }, BTNU, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => { draw(1); k("D") }, BTND, { repeat: 1, debounce: 50, edge: "rising" });
}
```

## Using Time

The badge has a Real-time clock, so it can keep track of the current time. You just need to set it.

* You can turn on `Settings → Communications → Set Current Time` in the IDE, and the next upload will set the clock.
* If you're using the `Puck.js` Web Bluetooth library you can also use `Puck.setTime()`. **You can do this by going to any of the example pages, entering the developer console, and typing `Puck.setTime()`**

Once that's done, `new Date()` will give you a `Date` object that you can use to get the current time. 


