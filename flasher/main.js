// This is the pre-installed code, and is too big to be uploaded via the Web IDE
Badge.URL = "CUSTOM_BADGE_URL";
Badge.badgeImages = [{ width: 128, height: 64, bpp: 1,
 buffer: E.toArrayBuffer(atob("CUSTOM_BADGE_IMAGE"))
}, { width: 128, height: 64, bpp: 1,
 buffer: E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwHAPwD+AH/wH4AAfAcP/B+B4P/g/+B/8H/gAH4PH/wfweH/8P/wf/D/4AB+Dx/8H8Hj//j/+H/x/8Dgfw8f/B/h5//4//x4A+CD+H+PHgAf8ef//P/8eAPAB/x/jx4AHvHn//z//ngHwAf8f88eAB755//8//5/94AH/nvPH/weee///P/+f/eAD/557x/8Hn3n//z//n/3wAf+ef8f/B4/5//8//54A8AH/Hj/H/geH+f//P/8eAPAB/x4/x4AHh/n//j//HgD4MP4eH8eAB4P4//4//h/8f/w4Hg/HgAeB+H/8P/wf/D/8AB4Px4AHgfg/+D/4H/wf+AAeB8eAA4DwD8A/wB/8B+AAHAPDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//4PwAfgAAAAAAAAAAAAP//+D8AH4AAAAAAAAAAAAD///g/AB+AAAAAAAAAAAAA///4PwAfgAAAAAAAAAAAAP//+D8AH4AAAAAAAAAAAAD///g/AB+AAAAAAAAAAAAA/gAAPwAfgAAAAAAAAAAAAP4AAD8AH4AAAAAAAAAAAAD+AAA/AB+AAAAAAAAAAAAA/gAAPwAfgAAAAAAAAAAAAP4AAD8AH4AAAAAAAAAAAAD//+A/AB+AAAAAAAAAAAAA///gPwAfgAAAAAAAAAAAAP//4D8AH4AAAAAAAAAAAAD//+A/AB+AAAAAAAAAAAAA///gPwAfgAAAAAAAAAAAAP//4D8AH4AAAAAAAAAAAAD+AAA/AB+AAAAAAAAAAAAA/gAAPwA/gAAAAAAAAAAAAP4AAD+AP4AAAAAAAAAAAAD+AAA/gH8AAAAAAAAAAAAA/gAAH+D/AAAAAAAAAAAAAP//+B///wAAAAAAAAAAAAD///gP//4AAAAAAAAAAAAA///4B//8AAAAAAAAAAAAAP//+AP/+AAAAAAAAAAAAAD///gB/+AAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="))
}, { width: 128, height: 64, bpp: 1,
 buffer: E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAH//AAAAAAAAAAAAAAAAAAD//zwAAAAAAAAAAAAAAAAD//5+AAAAAAAAAAAAAAAAB//+fgAAAAAAAAAAAAAAAA///j5AAAAAAAAAAAAAAAAP//88YAAAAAAAAAAAAAAAHx//AOAAAAAAAAAAAAAAAD4H/4HwAAAAAAB/gAAAAAA8Q//j+AAAAAAAf4AAAAAAePH/5/gAAAAAAGAAAAAAAHn5/+f4AAAAAABgAAAAAAB5+f/n/AcAwDgCYAOAMGHA+fH/5/w/g/D+L2AP4XP74Pzz/+f8MMYYhjhgGDHDDjD8Af/n/DBECAIwfxARggwQ/gH/5/4gTAgCMH8wGQIMEP+Y/+f+IE/8PjBgMBkCDBD/nH/n/iBMAOIgYDAZAgwQ/54/5/4gTAGCIGAwGQIMEP+fH+f8IEwBgiBgMBECDBD/n4/n/CBGAYYgYBgxAgwQ/5/H5/wgRznOIGAO4QIMEH+f4+f8IEHw+iBgB8ECDBB/n/Hn/AAAAAAAAAAAAAAAf5/45/gAAAAAAAAAAAAAAD8f/AP4AAAAAAAAAAAAAAA+B/4B8AAAAAAAAAAAAAAAHAP/APAAAAAAAAAAAAAAABjz/zxgAAAAAAAAAAAAAAAJ8f4+QAAAAAAAAAAAAAAAAfn+fgAAAAAAAAAAAAAAAAH5/n4AAAAAAAAAAAAAAAAA8f88AAAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="))
}
];
// pretokenise JS to give us a bit more space
E.setFlags({ pretokenise: 1 });
// Get it all back to normal-ish
Badge.reset = () => {
 clearInterval();
 clearWatch();
 Bluetooth.removeAllListeners();
 LoopbackB.removeAllListeners();
 g.setRotation(0, 1);
 g.clear();
 g.flip();
};
Badge.drawCenter = s => {
  g.clear();
  s.split("\n").forEach((s, i) => g.drawString(s, (128-g.stringWidth(s))/2, i*6));
  g.flip();
};
// Main menu
Badge.menu = () => {
 function wait(cb) { m = { move: cb, select: cb }; }
 var mainmenu = {
  "": { "title": "-- Choose your Adventure --" },
  "About": function () {
   Badge.drawCenter(`-- NodeConf EU 2017 Badge --
Sponsored by NearForm

Gordon Williams
@Espruino
www.espruino.com
www.nearform.com`);
   wait(e => Badge.menu());
  },
  "Make Connectable": () => {
   Badge.drawCenter(`-- Now Connectable --

You can connect to this badge
with a BLE capable device. Go to
espruino.com/ide on a Web BLE
capable browser to start coding!`);
   g.drawString("Name: Badge " + NRF.getAddress().substr(-5).replace(":", ""), 0, 44);
   g.drawString("MAC: " + NRF.getAddress(), 0, 50);
   g.flip();
   wait(() => { NRF.sleep(); Badge.menu(); });
   NRF.wake();
  },
  "T-Rex": Badge.trex,
  "Flappy Bird": Badge.flappy,
  "REPL": Badge.repl,
  "Sketch": Badge.sketch,
  "Delete Sketch": () => {
   delete Badge.sketchedImage;
   for (var i = 0; i < Badge.badgeImages.length; i++)
    if (Badge.badgeImages[i].sketched)
     Badge.badgeImages.splice(i--, 1);
  },
  "Back to Badge": Badge.badge
 };
 if (Badge.apps) for (var i in Badge.apps) mainmenu[i]=Badge.apps[i];

 Badge.reset();
 var menu = require("graphical_menu");
 var m = menu.list(g, mainmenu);
 setWatch(e => m.move(-1), BTNU, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => m.move(1), BTND, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => m.select(), BTNA, { repeat: 1, debounce: 50, edge: "rising" });
}
Badge.repl = () => {
 Badge.reset();
 var KEYMAPLOWER = [
  "`1234567890-=\x08\x08\x08",
  "\tqwertyuiop[]\n\n\n",
  "\0asdfghjkl;'#\x84\x82\x85",
  "\x01\\zxcvbnm,./ \x80\x83\x81",
 ];
 var KEYMAPUPPER = [
  "¬!\"£$%^&*()_+\x08\x08\x08",
  "\tQWERTYUIOP{}\n\n\n",
  "\0ASDFGHJKL:@~\x84\x82\x85",
  "\x01|ZXCVBNM<>? \x80\x83\x81",
 ];
 var KEYEXTRA = [
  String.fromCharCode(27, 91, 68),
  String.fromCharCode(27, 91, 67),
  String.fromCharCode(27, 91, 65),
  String.fromCharCode(27, 91, 66),
  String.fromCharCode(27, 91, 53, 126),
  String.fromCharCode(27, 91, 54, 126),
 ];
 var KEYIMG = {
  width: 64, height: 32, bpp: 1,
  buffer: E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAACAAAAAAAAAAYAAAAAAAAAD+AAAAAAAAAGAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8DAAAAAAAAAQOAAAAAAAADgwAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAADgAAAAAAAAAO4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAugAAAAAAAAG7AAAAAAAAA5OAAAAAAAApkwAAAAAAADiCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="))
 };
 var kbx = 0, kby = 0, kbShift = false;
 g.setRotation(3, 1);
 function drawKB() {
  var yoff = 128 - 32;
  var map = kbShift ? KEYMAPUPPER : KEYMAPLOWER;
  g.drawImage(KEYIMG, 0, yoff);
  g.drawString(map[0], 0, yoff);
  g.drawString(map[1], 0, yoff + 8);
  g.drawString(map[2], 0, yoff + 16);
  g.drawString(map[3], 0, yoff + 24);
  for (var y = 0; y < 7; y++) {
   var xo = kbx * 4;
   var yo = yoff + y + kby * 8;
   g.setPixel(xo, yo, !g.getPixel(xo++, yo));
   g.setPixel(xo, yo, !g.getPixel(xo++, yo));
   g.setPixel(xo, yo, !g.getPixel(xo++, yo));
   g.setPixel(xo, yo, !g.getPixel(xo, yo));
  }
  g.flip();
 }

 // key movement
 setWatch(() => { kby = (kby + 3) & 3; drawKB() }, BTNR, { repeat: true, debounce: 50, edge: "rising" });
 setWatch(() => { kby = (kby + 1) & 3; drawKB() }, BTNL, { repeat: true, debounce: 50, edge: "rising" });
 setWatch(() => { kbx = (kbx + 15) & 15; drawKB() }, BTNU, { repeat: true, debounce: 50, edge: "rising" });
 setWatch(() => { kbx = (kbx + 1) & 15; drawKB() }, BTND, { repeat: true, debounce: 50, edge: "rising" });
 setWatch(() => { kbShift = !kbShift; drawKB() }, BTNB, { repeat: true, debounce: 50, edge: "rising" });
 setWatch(() => {
  if (BTNB.read()) return Badge.menu();
  // actually select
  var map = kbShift ? KEYMAPUPPER : KEYMAPLOWER;
  kbShift = false;
  drawKB();
  var key = map[kby][kbx];
  if (key !== undefined && key.charCodeAt(0) > 127)
   key = KEYEXTRA[key.charCodeAt(0) - 128];
  if (key !== undefined) LoopbackB.write(key)
 }, BTNA, { repeat: true, debounce: 50, edge: "rising" });

 g.clear();
 drawKB();
 LoopbackB.removeAllListeners();
 Bluetooth.removeAllListeners();
 // Set up the terminal
 term = require("VT100").connect(g, {
  charWidth: 4,
  charHeight: 7,
  marginTop: 0,
  marginLeft: 0,
  marginBottom: 40
 });
 term.__proto__.scrollDown = () => {
  g.setColor(0);
  g.fillRect(0, 128 - 32, 64, 128); // remove kb
  g.setColor(1);
  new Uint8Array(g.buffer).set(new Uint8Array(g.buffer, 7), 0);
  drawKB();
  g.flip();
  this.y--;
 };
 LoopbackB.on('data', e => {
  for (var i in e) term.char(e[i]);
  g.flip();
 });
 Bluetooth.on('data', e => LoopbackB.write(e));
 LoopbackA.setConsole();
 console.log("JS REPL\nHold B then A\nto exit");
};
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
 var code = "";
 function k(ch) {
  code = (code + ch).substr(-10);
  if (code == "UUDDLRLRBA") Badge.menu();
 }
 draw(0);
 setWatch(e => k("A"), BTNA, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => k("B"), BTNB, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => k("L"), BTNL, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => k("R"), BTNR, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => { draw(-1); k("U") }, BTNU, { repeat: 1, debounce: 50, edge: "rising" });
 setWatch(e => { draw(1); k("D") }, BTND, { repeat: 1, debounce: 50, edge: "rising" });
}
Badge.trex = () => {
 Badge.reset();
 var IMG = {
  rex: [
   { width: 20, height: 22, bpp: 1, transparent: 0, buffer: E.toArrayBuffer(atob("AB/gA/8AN/AD/wA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYgAAIAADAP//")) },
   { width: 20, height: 22, bpp: 1, transparent: 0, buffer: E.toArrayBuffer(atob("AB/gA/8AN/AD/wA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYwAEAABgAP//")) },
   { width: 20, height: 22, bpp: 1, transparent: 0, buffer: E.toArrayBuffer(atob("AB/gAj8AK/ACPwA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYgAEIABjAP//")) }
  ],
  cacti: [
   { width: 12, height: 24, bpp: 1, transparent: 0, buffer: E.toArrayBuffer(atob("BgDwDwDwDwDyT373737373737373/+f8DwDwDwDwDwDwDwDw")) },
   { width: 8, height: 18, bpp: 1, transparent: 0, buffer: E.toArrayBuffer(atob("GBhY2dnZ2fl5Hx4YGBgYGBgY")) }
  ],
 };
 var cacti, rex, frame;

 function gameStart() {
  rex = {
   alive: true,
   img: 0,
   x: 10, y: 0,
   vy: 0,
   score: 0
  };
  cacti = [{ x: 128, img: 1 }];
  var random = new Uint8Array(128 * 3 / 8);
  for (var i = 0; i < 50; i++) {
   var a = 0 | (Math.random() * random.length);
   var b = 0 | (Math.random() * 8);
   random[a] |= 1 << b;
  }
  IMG.ground = { width: 128, height: 3, bpp: 1, buffer: random.buffer };
  frame = 0;
  setInterval(onFrame, 50);
 }
 function gameStop() {
  rex.alive = false;
  rex.img = 2; // dead
  clearInterval();
  setTimeout(() => setWatch(gameStart, BTNA, { repeat: 0, debounce: 50, edge: "rising" }), 1000);
  setTimeout(onFrame, 10);
 }

 function onFrame() {
  g.clear();
  if (rex.alive) {
   frame++;
   rex.score++;
   if (!(frame & 3)) rex.img = rex.img ? 0 : 1;
   // move rex
   if (BTNL.read() && rex.x > 0) rex.x--;
   if (BTNR.read() && rex.x < 20) rex.x++;
   if ((BTNU.read() || BTNA.read()) && rex.y == 0) rex.vy = 4;
   rex.y += rex.vy;
   rex.vy -= 0.2;
   if (rex.y <= 0) { rex.y = 0; rex.vy = 0; }
   // move cacti
   var lastCactix = cacti.length ? cacti[cacti.length - 1].x : 127;
   if (lastCactix < 128) {
    cacti.push({
     x: lastCactix + 24 + Math.random() * 128,
     img: (Math.random() > 0.5) ? 1 : 0
    });
   }
   cacti.forEach(c => c.x--);
   while (cacti.length && cacti[0].x < 0) cacti.shift();
  } else {
   g.drawString("Game Over!", (128 - g.stringWidth("Game Over!")) / 2, 20);
  }
  g.drawLine(0, 60, 127, 60);
  cacti.forEach(c => g.drawImage(IMG.cacti[c.img], c.x, 60 - IMG.cacti[c.img].height));
  // check against actual pixels
  var rexx = rex.x;
  var rexy = 38 - rex.y;
  if (rex.alive &&
   (g.getPixel(rexx + 0, rexy + 13) ||
   g.getPixel(rexx + 2, rexy + 15) ||
   g.getPixel(rexx + 5, rexy + 19) ||
   g.getPixel(rexx + 10, rexy + 19) ||
   g.getPixel(rexx + 12, rexy + 15) ||
   g.getPixel(rexx + 13, rexy + 13) ||
   g.getPixel(rexx + 15, rexy + 11) ||
   g.getPixel(rexx + 17, rexy + 7) ||
   g.getPixel(rexx + 19, rexy + 5) ||
   g.getPixel(rexx + 19, rexy + 1))) {
   return gameStop();
  }
  g.drawImage(IMG.rex[rex.img], rexx, rexy);
  var groundOffset = frame & 127;
  g.drawImage(IMG.ground, -groundOffset, 61);
  g.drawImage(IMG.ground, 128 - groundOffset, 61);
  g.drawString(rex.score, 127 - g.stringWidth(rex.score));
  g.flip();
 }
 gameStart();
 setWatch(x => Badge.menu(), BTNB, { repeat: 0, debounce: 50, edge: "rising" });
};
Badge.flappy = () => {
 Badge.reset();
 var SPEED = 0.5;
 var BIRDIMG = {
  width: 8, height: 8, bpp: 1,
  transparent: 0,
  buffer: new Uint8Array([
0b00000000,
0b01111000,
0b10000100,
0b10111010,
0b10100100,
0b10000100,
0b01111000,
0b00000000,
  ]).buffer
 };

 var birdy, birdvy;
 var wasPressed = false;
 var running = false;
 var barriers;
 var score;

 function newBarrier(x) {
  barriers.push({
   x1: x - 5,
   x2: x + 5,
   y: 10 + Math.random() * (g.getHeight() - 20),
   gap: 8
  });
 }

 function gameStart() {
  running = true;
  birdy = g.getHeight() / 2;
  birdvy = 0;
  barriers = [];
  newBarrier(g.getWidth() / 2);
  newBarrier(g.getWidth());
  score = 0;
  wasPressed = false;
  setInterval(onFrame, 50);
 }

 function gameStop() {
  running = false;
  clearInterval();
  setTimeout(() => setWatch(gameStart, BTNA, { repeat: 0, debounce: 50, edge: "rising" }), 1000);
  setTimeout(onFrame, 10);
 }

 function onFrame() {
  var buttonState = BTN.read();

  g.clear();
  if (!running) {
   g.drawString("Game Over!", 25, 10);
   g.drawString("Score", 10, 20);
   g.drawString(score, 10, 26);
   g.flip();
   return;
  }

  if (buttonState && !wasPressed)
   birdvy -= 2;
  wasPressed = buttonState;

  score++;
  birdvy += 0.2;
  birdvy *= 0.8;
  birdy += birdvy;
  if (birdy > g.getHeight())
   return gameStop();
  // draw bird
  g.drawImage(BIRDIMG, 0, birdy - 4);
  // draw barriers
  barriers.forEach(b => {
   b.x1 -= SPEED;
   b.x2 -= SPEED;
   var btop = b.y - b.gap;
   var bbot = b.y + b.gap;
   g.drawRect(b.x1 + 1, -1, b.x2 - 2, btop - 5);
   g.drawRect(b.x1, btop - 5, b.x2, btop);
   g.drawRect(b.x1, bbot, b.x2, bbot + 5);
   g.drawRect(b.x1 + 1, bbot + 5, b.x2 - 1, g.getHeight());
   if (b.x1 < 6 && (birdy - 3 < btop || birdy + 3 > bbot))
    return gameStop();
  });
  while (barriers.length && barriers[0].x2 <= 0) {
   barriers.shift();
   newBarrier(g.getWidth());
  }

  g.flip();
 }
 gameStart();
 setWatch(x => Badge.menu(), BTNB, { repeat: 0, debounce: 50, edge: "rising" });
};
Badge.sketch = () => {
 Badge.reset();
 function cursor() {
  for (i = -2; i <= 2; i++) {
   g.setPixel(x + i, y, !g.getPixel(x + i, y));
   g.setPixel(x, y + i, !g.getPixel(x, y + i));
  }
 }
 function onFrame() {
  cursor();
  if (BTNA.read()) { gr.setPixel(x, y, 1); g.setPixel(x, y, 1); }
  if (BTNB.read()) { gr.setPixel(x, y, 0); g.setPixel(x, y, 0); }
  if (BTNU.read()) y = (y + 63) & 63;
  if (BTND.read()) y = (y + 1) & 63;
  if (BTNL.read()) x = (x + 127) & 127;
  if (BTNR.read()) x = (x + 1) & 127;
  cursor();
  g.flip();
 }
 Badge.drawCenter(`-- Sketch! --
 
 Press A & B to return
 to the menu`);
 g.clear();
 var gr = Graphics.createArrayBuffer(128, 64, 1, { msb: true });
 if (Badge.sketchedImage) {
  gr.buffer = Badge.sketchedImage.buffer.buffer;
  g.drawImage(Badge.sketchedImage);
 } else {
  Badge.sketchedImage = { width: 128, height: 64, bpp: 1, buffer: new Uint8Array(gr.buffer), sketched: true };
  Badge.badgeImages.push(Badge.sketchedImage);
 }
 var x = 64, y = 32;
 cursor();
 // don't flip until button pressed 
 var interval;
 var BTNS = [BTNU, BTND, BTNL, BTNR, BTNA, BTNB];
 function onButton() {
  if (BTNA.read() && BTNB.read())
   return Badge.menu();
  if (digitalRead(BTNS)) {
   onFrame();
   if (!interval) interval = setInterval(onFrame, 50);
  } else {
   if (interval) clearInterval(interval);
   interval = undefined;
  }
 }
 BTNS.forEach(b=>setWatch(onButton, b, { repeat: 1, debounce: 20, edge: "both" }));
};

function onInit() {
 NRF.nfcURL(Badge.URL);
 NRF.sleep(); // no advertising
 Badge.badge();
}
