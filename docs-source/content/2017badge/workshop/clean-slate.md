---
title: "Clean Slate"
weight: 2
date: 2017-11-03T09:45:33+01:00
draft: false
---

Clear everything out of the right-hand side of the IDE window, and click the
'Upload' button in the middle of the screen (a picture of a chip and an up-arrow).

The Badge should now just display the 'Espruino' logo - this is what gets
displayed when no code has been loaded.

Don't worry though **- this hasn't overwritten what was on the badge before.**
That code is in Flash memory, and uploading an empty file has left the contents
 of RAM empty, while the Flash memory has stayed the same. Removing the battery
 and re-inserting (or flicking it away with your finger) will make the badge
 reload everything.

**Note:** If you have `Save on Send` set in the options, or type `save()`
then it *will* blow away the contents of the badge.
