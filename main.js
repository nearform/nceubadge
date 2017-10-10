// pretokenise JS to give us a bit more space
E.setFlags({pretokenise:1});
// Get it all back to normal-ish
Badge.reset = function() {
  clearInterval();
  clearWatch();
  Bluetooth.removeAllListeners();
  LoopbackB.removeAllListeners();
  g.setRotation(0,1);
  g.clear();
  g.flip();
};
// Main menu
Badge.menu = function() {
  function wait(cb) { m = {move:cb,select:cb}; }
  var mainmenu = {
  "" : {"title" : "-- Menu --"},
  "Make Connectable" : function() {
    g.clear();
    g.drawString("-- Now Connectable --");
    g.drawString("Connect to BLE Device",0,14);
    g.drawString("Badge "+NRF.getAddress().substr(-5).replace(":",""),0,20);
    g.drawString("MAC "+NRF.getAddress(),0,50);
    g.flip();
    wait(()=>{NRF.sleep();m=menu.list(g, mainmenu)});
    NRF.wake();
  },
  "About" : function() {
    g.clear();
    ["-- Espruino Badge --","Sponsored by NearForm","",
    "Gordon Williams","@Espruino",
    "www.espruino.com","www.nearform.com"].forEach(
      (s,i)=>g.drawString(s,(128-g.stringWidth(s))/2,i*6));
    g.flip();
    wait(e=>m=menu.list(g, mainmenu));
  },
  "T-Rex" : Badge.trex,
  "REPL" : Badge.repl,
  "Back" : Badge.badge
};

Badge.reset();
var menu = require("graphical_menu");
var m = menu.list(g, mainmenu);
setWatch(e=>m.move(-1), BTNU, {repeat:1,debounce:50,edge:"rising"});
setWatch(e=>m.move(1), BTND, {repeat:1,debounce:50,edge:"rising"});
setWatch(e=>m.select(), BTNA, {repeat:1,debounce:50,edge:"rising"});
}
Badge.repl = function() {
  Badge.reset();
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
    if (BTNB.read()) return Badge.menu();
    // actually select
    var map = kbShift ? KEYMAPUPPER : KEYMAPLOWER;
    kbShift = false;
    drawKB();
    var key = map[kby][kbx];
    if (key!==undefined && key.charCodeAt(0)>127)
      key = KEYEXTRA[key.charCodeAt(0)-128];
    if (key!==undefined) LoopbackB.write(key)
  }, BTNA, {repeat:true,debounce:50,edge:"rising"});

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
  LoopbackB.on('data',function(e){
    for (var i in e) term.char(e[i]);
    g.flip();
  });
  Bluetooth.on('data',function(e){ LoopbackB.write(e); });
  LoopbackA.setConsole();
  console.log("JS REPL\nHold B then A\nto exit");
};
Badge.badge = function() {
  Badge.reset();
  var counter = 0;
  function draw(n) {
    counter += n?n:0;
    if (counter<0) counter=2;
    if (counter>2) counter=0;
    g.clear();
    if (counter==0) g.drawString("Page 1");
    if (counter==1) g.drawString("Page 2");
    if (counter==2) g.drawString("Page 3");
    g.flip();
  }
  draw(0);
  setInterval(e=>draw(1), 5000);
  setWatch(e=>Badge.menu(), BTNA, {repeat:1,debounce:50,edge:"rising"});
  setWatch(e=>draw(-1), BTNU, {repeat:1,debounce:50,edge:"rising"});
  setWatch(e=>draw(1), BTND, {repeat:1,debounce:50,edge:"rising"});
}
Badge.trex = function() {
  Badge.reset();
  var IMG = {
    rex : [
      // running
       { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gA/8AN/AD/wA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYgAAIAADAP//")) },
       { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gA/8AN/AD/wA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYwAEAABgAP//")) },
       // dead
       { width : 20, height : 22, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("AB/gAj8AK/ACPwA/8AP/AD4AA/yAfAgfwMP/Dn/Q//wP/8B/+AP/gB/wAP4AB2AAYgAEIABjAP//")) }
     ],
    cacti : [
      { width : 12, height : 24, bpp : 1, transparent:0, buffer : E.toArrayBuffer(atob("BgDwDwDwDwDyT373737373737373/+f8DwDwDwDwDwDwDwDw")) },
      { width : 8, height : 18, bpp : 1,  transparent:0, buffer : E.toArrayBuffer(atob("GBhY2dnZ2fl5Hx4YGBgYGBgY")) }
    ],
  };
  var cacti, rex, frame;

  function gameStart() {
    rex = {
      alive : true,
      img : 0,
      x : 10, y : 0,
      vy : 0,
      score : 0
    };
    cacti = [ { x:128, img:1 } ];
    var random = new Uint8Array(128*3/8);
    for (var i=0;i<50;i++) {
      var a = 0|(Math.random()*random.length);
      var b = 0|(Math.random()*8);
      random[a]|=1<<b;
    }
    IMG.ground = { width: 128, height: 3, bpp : 1, buffer : random.buffer };
    frame = 0;
    setInterval(onFrame, 50);
  }
  function gameStop() {
    rex.alive = false;
    rex.img = 2; // dead
    clearInterval();
    setTimeout(function() {
      setWatch(gameStart, BTNA, {repeat:0,debounce:50,edge:"rising"});
    }, 1000);
    setTimeout(onFrame, 10);
  }

  function onFrame() {
    g.clear();
    if (rex.alive) {
      frame++;
      rex.score++;
      if (!(frame&3)) rex.img = rex.img?0:1;
      // move rex
      if (BTNL.read() && rex.x>0) rex.x--;
      if (BTNR.read() && rex.x<20) rex.x++;
      if (BTNU.read() && rex.y==0) rex.vy=4;
      rex.y += rex.vy;
      rex.vy -= 0.2;
      if (rex.y<=0) {rex.y=0; rex.vy=0; }
      // move cacti
      var lastCactix = cacti.length?cacti[cacti.length-1].x:127;
      if (lastCactix<128) {
        cacti.push({
          x : lastCactix + 24 + Math.random()*128,
          img : (Math.random()>0.5)?1:0
        });
      }
      cacti.forEach(c=>c.x--);
      while (cacti.length && cacti[0].x<0) cacti.shift();
    } else {
      g.drawString("Game Over!",(128-g.stringWidth("Game Over!"))/2,20);
    }
    g.drawLine(0,60,127,60);
    cacti.forEach(c=>g.drawImage(IMG.cacti[c.img],c.x,60-IMG.cacti[c.img].height));
    // check against actual pixels
    var rexx = rex.x;
    var rexy = 38-rex.y;
    if (rex.alive &&
       (g.getPixel(rexx+0, rexy+13) ||
        g.getPixel(rexx+2, rexy+15) ||
        g.getPixel(rexx+5, rexy+19) ||
        g.getPixel(rexx+10, rexy+19) ||
        g.getPixel(rexx+12, rexy+15) ||
        g.getPixel(rexx+13, rexy+13) ||
        g.getPixel(rexx+15, rexy+11) ||
        g.getPixel(rexx+17, rexy+7) ||
        g.getPixel(rexx+19, rexy+5) ||
        g.getPixel(rexx+19, rexy+1))) {
      return gameStop();
    }
    g.drawImage(IMG.rex[rex.img], rexx, rexy);
    var groundOffset = frame&127;
    g.drawImage(IMG.ground, -groundOffset, 61);
    g.drawImage(IMG.ground, 128-groundOffset, 61);
    g.drawString(rex.score,127-g.stringWidth(rex.score));
    g.flip();
  }
  gameStart();
  setWatch(x=>Badge.menu(), BTNB, {repeat:0,debounce:50,edge:"rising"});
};

function onInit() {
  NRF.sleep(); // no advertising
  Badge.badge();
}
