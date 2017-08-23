/** Click counter - detects how many clicks/second you 
managed over 100 clicks. */

var MAXCLICK = 100;
var startTime, endTime, lastClick;
var clickCount;
var history = [];

g.drawStringCenter = function(txt,x,y) {
  g.drawString(txt, x-g.stringWidth(txt)/2, y);
}

function start() {
  startTime = getTime();
  lastClick = undefined;
  endTime = undefined;
  score = 0;
  clickCount = -1;
  history = [];
  onClick();
}

function onClick() {
  if (endTime!==undefined) {
    // Game over - ignore first 1.5 sec
    if (getTime()>endTime+1.5)
      start();   
    return;
  }
  
  clickCount++;
  var clickTime = getTime();
  if (lastClick!==undefined)
    history.push(1/(clickTime-lastClick));
  lastClick = clickTime;

  if (clickCount>=MAXCLICK) 
    return gameOver();

  g.clear();
  g.drawStringCenter("Press A as quick", g.getWidth()/2, 0);
  g.drawStringCenter("as you can!", g.getWidth()/2, 8);
  g.drawStringCenter(clickCount+" / "+MAXCLICK, g.getWidth()/2, 20);
  g.drawRect(0,50,g.getWidth()-1, 63);
  g.fillRect(1,51,1+(g.getWidth()-2)*clickCount/MAXCLICK, 62);  

  g.moveTo(0,48);
  history.forEach(function(speed,i) {
    var y = 48 - speed*2;
    if (y<30) y=30;
    g.lineTo(i*g.getWidth()/MAXCLICK, y);
  });

  g.flip();
}

// When Espruino starts up...
function onInit() {
  clearWatch();
  setWatch(onClick, BTN, {edge:"rising",debounce:10,repeat:true});
  start();
}

function gameOver() {
  endTime = getTime();
  g.clear();
  g.setFontVector(19);
  g.drawStringCenter("Game Over!", g.getWidth()/2, 0);
  g.setFontBitmap();
  g.drawStringCenter("you got...", g.getWidth()/2, 22);
  var cps = clickCount / (endTime-startTime);
  g.setFontVector(20);
  g.drawStringCenter(cps.toFixed(2), g.getWidth()/2, 30);
  g.setFontBitmap();
  g.drawStringCenter("Clicks/sec", g.getWidth()/2, 55);
  g.flip();
}

onInit();
