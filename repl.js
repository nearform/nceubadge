/* Run JS on your badge! Full keyboard and
JS REPL.

Turn your badge on its side, and arrow buttons
highlight a keyboard key, B turns shift on and
off, and A presses a key.

Note:

* Left, 2nd row is Tab - it'll save you some typing!
* The arrow keys on the right of the keyboard do command history too
* To the left and right of uparrow are page up and page down 
* TO UPLOAD MORE CODE YOU'LL NEED TO POWER CYCLE THE BADGE

*/

// Key Maps for Keyboard
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
/* If a char in the keymap is >=128, 
subtract 128 and look in this array for
multi-character key codes*/
var KEYEXTRA = [
  String.fromCharCode(27,91,68), // 0x80 left
  String.fromCharCode(27,91,67), // 0x81 right
  String.fromCharCode(27,91,65), // 0x82 up
  String.fromCharCode(27,91,66), // 0x83 down
  String.fromCharCode(27,91,53,126), // 0x84 page up
  String.fromCharCode(27,91,54,126), // 0x85 page down
];
// Extra images for up/down/enter/etc
var KEYIMG = {
  width : 64, height : 32, bpp : 1,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAACAAAAAAAAAAYAAAAAAAAAD+AAAAAAAAAGAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8DAAAAAAAAAQOAAAAAAAADgwAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAQAAAAAAAAADgAAAAAAAAAO4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAugAAAAAAAAG7AAAAAAAAA5OAAAAAAAApkwAAAAAAADiCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="))
};
var kbx = 0, kby = 0, kbShift = false;

g.setRotation(3,1);

function drawKB() {
  var yoff = 128-32;
  var map = kbShift ? KEYMAPUPPER : KEYMAPLOWER;
  g.drawImage(KEYIMG,0,yoff);
  g.drawString(map[0],0,yoff);
  g.drawString(map[1],0,yoff+8);
  g.drawString(map[2],0,yoff+16);
  g.drawString(map[3],0,yoff+24);
  for (var y=0;y<7;y++) {
    var xo=kbx*4;
    var yo=yoff+y+kby*8;
    g.setPixel(xo,yo,!g.getPixel(xo++,yo));
    g.setPixel(xo,yo,!g.getPixel(xo++,yo));
    g.setPixel(xo,yo,!g.getPixel(xo++,yo));
    g.setPixel(xo,yo,!g.getPixel(xo,yo));
  }
  g.flip();
}

// key movement
setWatch(()=>{kby=(kby+3)&3;drawKB()}, BTNR, {repeat:true,debounce:50,edge:"rising"});
setWatch(()=>{kby=(kby+1)&3;drawKB()}, BTNL, {repeat:true,debounce:50,edge:"rising"});
setWatch(()=>{kbx=(kbx+15)&15;drawKB()}, BTNU, {repeat:true,debounce:50,edge:"rising"});
setWatch(()=>{kbx=(kbx+1)&15;drawKB()}, BTND, {repeat:true,debounce:50,edge:"rising"});
setWatch(()=>{kbShift=!kbShift;drawKB()}, BTNB, {repeat:true,debounce:50,edge:"rising"});
setWatch(()=>{
  // actually select
  var map = kbShift ? KEYMAPUPPER : KEYMAPLOWER;
  kbShift = false;
  drawKB();
  var key = map[kby][kbx];
  if (key!==undefined && key.charCodeAt(0)>127)
    key = KEYEXTRA[key.charCodeAt(0)-128];
  if (key!==undefined) LoopbackB.write(key);
}, BTNA, {repeat:true,debounce:50,edge:"rising"});

function onInit() {
  g.clear();
  drawKB();
  LoopbackB.removeAllListeners();
  Bluetooth.removeAllListeners();
  // Set up the terminal
  term = require("VT100").connect(g, {
    charWidth : 4,
    charHeight : 7,
    marginTop : 0,
    marginLeft : 0,
    marginBottom : 40
  });
  term.__proto__.scrollDown = function() {
    g.setColor(0);
    g.fillRect(0,128-32,64,128); // remove kb
    g.setColor(1);
    new Uint8Array(g.buffer).set(new Uint8Array(g.buffer, 7), 0);
    drawKB();
    g.flip();
    this.y--;
  };
  // take characters from Espruino, and push them into the VT100 terminal
  LoopbackB.on('data',function(e){
    for (var i in e) term.char(e[i]);
    g.flip();
  });
  // copy characters coming down Bluetooth into the 'loopback' device
  Bluetooth.on('data',function(e){ LoopbackB.write(e); });
  // Now move the console to Loopback
  LoopbackA.setConsole();
}

onInit();
