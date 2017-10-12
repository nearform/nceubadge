Badge.URL = "http://www.espruino.com";
Badge.badgeImages = [{ // fonz
  width : 128, height : 64, bpp : 1,
  transparent : 0,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAB//AAAAAAAAAAAAAAAAAAB3v+AAAAAAAAAAAAAAAAAA+/f8AAAAAAAAAAAAAAAAA7/7/4AAAAAAAAAAAAAAAAP//X/AAAAAAAAAAAAAAAAG///f4AAAAAAAAAAAAAAAB///9/AAAAAAAAAAAAAAAA7/3/7wAAAAAAAAAAAAAAAf////fAAAAAAAAAAAAAAAH///79wAAAAAAAAAAAAAAD/v///+AAAAAAAAAAAAAAA/tV//+gAAAAAAAAAAAAAAP5Kl9voAAAAAAAAAAAAAAH5ES1K+AAAAAAAAAAAAAAB/UiCovgAAAAAAAAAAAAAAfxSUAh4AAAAAAAAAAAAAAH+lRVBOAAAAAAAAAAAAAAD+lKglHgxgAAAAAAAAAAAAf8pKlE4cYAAAAAAAAAAAAP8lJEKeGMAAAAAAAAAAAAB/qSUonhjAAAAAAAAAAAAAf6SQRS8c4AAAAAAAAAAAAH9UlSEfHOAAAAAAAAAAAAB/kqSUXRzgAAAAAAAAAAAAP0/q/x4c4AAAAAAAAAAAAD6/9V6eAAAAAAAAAAAAAAB+v/d/3AAAAAAAAAAAAAAAPr/5/14AYwAAAADAAAAAAD9daN+OAEEAAAAAwAAAAAA+lVVpXABjAAAAAMAAAAAAP0qorQ4AQR5jRsbAAAAAABylUlS4AH8zImZEwAAAAAAOpFIiHAB/MTZkbMAAAAAAHqkolJgAQT+2LGjAAAAAAA9FVEBQAEMwFDwoAAAAAAAOkqk0MABhMRw4OEAAAAAAD0tELTAAQx8YGDDAAAAAAAeqspUwAAAEGBgwQAAAAAADWr1WoAAAABgwMAAAAAAAAu1bpSAAAAAwcGAAAAAAAANVTZWAAAAAAAAAAAAAAAABf1VeAAAAAAAAAAAAAAAAAs/624AAAAAAABCAAAAAAALrBTSAAAAAAAA5wAAAAAADaMA3AAAAAAAAOcAAAAAAAXa1iQAAAAAAADnAAAAAAAG1VqUAAAAAAAA5wAAAAAABarSUAAAAAAAAGMAAAAAADX1WVAAAAAAAABjAAAAAAD1q20gAAAAAAAAxgAAAAAB8umqsAAAAAAAAIQAAAAAA+r6SSAAAAAAAAAAAAAAAAPFXSSsAAAAAAAAAAAAAAAH1fVJXgAAAAAAAAAAAAAAB6o9Vt8AAAAAAAAAAAAAAA/K3+1fwAAAAAAAAAAAAAAf5WtvX+AAAAAAAAAAAAAAP8qv+q/wAAAAAAAAAAAAAB/qtW6n2AAAAAAAAAAAAAB/5Ve1U/YAAAAAAAAAAAAB/+lU3qn7AAAAAAAAAA=="))
},{ // nodeconf
 width : 128, height : 64, bpp : 1,
 transparent : 0,
 buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgHwHj/wAAAAAAAAAAAAAP8H/H4/8AAAAAAAAAAAAADnhxw+APAAAAAAAAAAAAAAQ44ODgDgAAAAAAAAAAAAAAOODg4A4AAAAAAAAAAAAAADjA4OAcAAAAAAAAAAAAAABwwGDgHAAAAAAAAAAAAAAA4MBg4DgAAAAAAAAAAAAAAcDg4OBwAAAAAAAAAAAAAAOA4ODgcAAAAAAAAAAAAAAPAPHg4OAAAAAAAAAAAAAAH/h/wODgAAAAAAAAAAAAAB/4P4DhwAAAAAAAAAAAAAAP+A4A4cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAwP8D/AP+B/AAPA4f4AAHwMH/g/8D/h/4AD4OP+AAB8DD/8P/gwA8MAA+DjgAAAfgw//j/8MAOAD4Pw44AAAHcMf/4//DAHAB/DcOOAAAB3DH/+P/4wBwAf4zjjgAAAc4x//z/+P8cAH+Mc4/4AAHHMf/8//j/HAB/jHOP+AABxzH/+P/4wBwAf4w7jgAAAcPx//j/8MAcAH8MH44AAAHD8P/4//DADgA+DB+OAAABwfD/8P/g4A8MAAwPjgAAAcDwf+D/wP+H/gAMD44AAAHA8B/A/wD/gfwADAeGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="))
},{ // nearform
  width : 128, height : 64, bpp : 1,
  transparent : 0,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAH/+AAAAAAAAAAAAAAAAAAH//AAAAAAAAAAAAAAAAAAD//zwAAAAAAAAAAAAAAAAD//5+AAAAAAAAAAAAAAAAB//+fgAAAAAAAAAAAAAAAA///j5AAAAAAAAAAAAAAAAP//88YAAAAAAAAAAAAAAAHx//AOAAAAAAAAAAAAAAAD4H/4HwAAAAAAB/gAAAAAA8Q//j+AAAAAAAf4AAAAAAePH/5/gAAAAAAGAAAAAAAHn5/+f4AAAAAABgAAAAAAB5+f/n/AcAwDgCYAOAMGHA+fH/5/w/g/D+L2AP4XP74Pzz/+f8MMYYhjhgGDHDDjD8Af/n/DBECAIwfxARggwQ/gH/5/4gTAgCMH8wGQIMEP+Y/+f+IE/8PjBgMBkCDBD/nH/n/iBMAOIgYDAZAgwQ/54/5/4gTAGCIGAwGQIMEP+fH+f8IEwBgiBgMBECDBD/n4/n/CBGAYYgYBgxAgwQ/5/H5/wgRznOIGAO4QIMEH+f4+f8IEHw+iBgB8ECDBB/n/Hn/AAAAAAAAAAAAAAAf5/45/gAAAAAAAAAAAAAAD8f/AP4AAAAAAAAAAAAAAA+B/4B8AAAAAAAAAAAAAAAHAP/APAAAAAAAAAAAAAAABjz/zxgAAAAAAAAAAAAAAAJ8f4+QAAAAAAAAAAAAAAAAfn+fgAAAAAAAAAAAAAAAAH5/n4AAAAAAAAAAAAAAAAA8f88AAAAAAAAAAAAAAAAAAP/AAAAAAAAAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAAAD//AAAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="))
}
];
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
  "" : {"title" : "-- Choose your Adventure --"},
  "About" : function() {
    g.clear();
    ["-- Espruino Badge --","Sponsored by NearForm","",
    "Gordon Williams","@Espruino",
    "www.espruino.com","www.nearform.com"].forEach(
      (s,i)=>g.drawString(s,(128-g.stringWidth(s))/2,i*6));
    g.flip();
    wait(e=>m=menu.list(g, mainmenu));
  },  
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
  "T-Rex" : Badge.trex,
  "Flappy Bird" : Badge.flappy,
  "REPL" : Badge.repl,
  "Back to Badging" : Badge.badge
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
  var timeout;
  function draw(n) {
    counter += n?n:0;
    if (counter<0) counter=Badge.badgeImages.length-1;
    if (counter>=Badge.badgeImages.length) counter=0;
    g.clear();
    g.drawImage(Badge.badgeImages[counter]);
    g.flip();
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(e=>{timeout=undefined;draw(1)}, 5000);
  }
  var code="";
  function k(ch) {
    code = (code+ch).substr(-10);
    if (code=="UUDDLRLRBA") Badge.menu();
  }
  draw(0);  
  setWatch(e=>k("A"), BTNA, {repeat:1,debounce:50,edge:"rising"});
  setWatch(e=>k("B"), BTNB, {repeat:1,debounce:50,edge:"rising"});
  setWatch(e=>k("L"), BTNL, {repeat:1,debounce:50,edge:"rising"});
  setWatch(e=>k("R"), BTNR, {repeat:1,debounce:50,edge:"rising"});
  setWatch(e=>{draw(-1);k("U")}, BTNU, {repeat:1,debounce:50,edge:"rising"});
  setWatch(e=>{draw(1);k("D")}, BTND, {repeat:1,debounce:50,edge:"rising"});  
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
      if ((BTNU.read()||BTNA.read()) && rex.y==0) rex.vy=4;
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
Badge.flappy = function() {
  Badge.reset();
  var SPEED = 0.5;
  var BIRDIMG = {
    width : 8, height : 8, bpp : 1,
    transparent : 0,
    buffer : new Uint8Array([
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
      x1 : x-5,
      x2 : x+5,
      y : 10+Math.random()*(g.getHeight()-20),
      gap : 8
    });
  }

  function gameStart() {
    running = true;
    birdy = g.getHeight()/2;
    birdvy = 0;
    barriers = [];
    newBarrier(g.getWidth()/2);
    newBarrier(g.getWidth());
    score = 0;
    wasPressed = false;
    setInterval(onFrame, 50);    
  }

  function gameStop() {
    running = false;
    clearInterval();  
    setTimeout(function() {
      setWatch(gameStart, BTNA, {repeat:0,debounce:50,edge:"rising"});
    }, 1000);
    setTimeout(onFrame, 10);
  }

  function onFrame() {
    var buttonState = BTN.read();
    
    g.clear();
    if (!running) {
      g.drawString("Game Over!",25,10);
      g.drawString("Score",10,20);
      g.drawString(score,10,26);
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
    g.drawImage(BIRDIMG, 0,birdy-4);
    // draw barriers
    barriers.forEach(function(b) {
      b.x1-=SPEED;
      b.x2-=SPEED;
      var btop = b.y-b.gap;
      var bbot = b.y+b.gap;
      g.drawRect(b.x1+1, -1, b.x2-2, btop-5);
      g.drawRect(b.x1, btop-5, b.x2, btop);
      g.drawRect(b.x1, bbot, b.x2, bbot+5);
      g.drawRect(b.x1+1, bbot+5, b.x2-1, g.getHeight());
      if (b.x1<6 && (birdy-3<btop || birdy+3>bbot))
        return gameStop();
    });
    while (barriers.length && barriers[0].x2<=0) {
      barriers.shift();
      newBarrier(g.getWidth());
    }

    g.flip();
  }  
  gameStart();
  setWatch(x=>Badge.menu(), BTNB, {repeat:0,debounce:50,edge:"rising"});
};

function onInit() {
  NRF.nfcURL(Badge.URL);
  NRF.sleep(); // no advertising
  Badge.badge();
}
