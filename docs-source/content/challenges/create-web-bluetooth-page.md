---
title: "Create a Web Bluetooth Page"
weight: 12
date: 2017-10-28T10:29:15+01:00
draft: false
---
### Challenge 12

Implement a webpage that uses Web Bluetooth with the Puck.js library. Start simple and turn on/off an LED on your badge.

Eventually make it retrieve your last tweet from the Twitter API and then display it on the badge screen.

Lots of information about web Bluetooth and Espruino [here](https://www.espruino.com/Puck.js+Web+Bluetooth).

#### Add a menu via Web Bluetooth
You can really see the power of Web Bluetooth and Espruino by trying something like this:

```javascript
Puck.write(`
Badge.apps["My Foobar"] = function() {
  Badge.reset();
  // my stuff
  // when done, call Badge.menu
  // eg. setWatch(Badge.menu, BTNB, { repeat: 1, debounce: 50, edge: "rising" });
};
`);
```
Create code based on the above in a webpage and host it on GitHub Pages. Write it so that anyone can go to the page, click a button and add the app to their badge.

Note however that if you use any of Espruino's modules, you'll have to run it through the CLI first to output a JS file that also contains the modules.
