/** Snake Game, using up/down/left/right buttons */

// not needed on production firmwares
pinMode(BTNU,"input_pulldown");
pinMode(BTND,"input_pulldown");
pinMode(BTNL,"input_pulldown");
pinMode(BTNR,"input_pulldown");
// Current score
var score = 0;
// Snake position and direction
var pos, dir;
// previous snake positions
var history = [];
// the length that we'll let the snake get to
var snakeLength = 20;
// a list of apple locations (that the snake can eat)
var apples = [];

function drawScore() {
  // remove old score...
  g.setColor(0);  
  g.fillRect(0,0,g.getWidth(),5);
  g.setColor(1);
  g.drawString(score);
}

function newApple() {
  var p;
  // keep coming up with random locations until there
  // is nothing drawn where we want to put the apple
  do {
    p = { x : Math.round(Math.random()*g.getWidth()),
          y : 6 + Math.round(Math.random()*(g.getHeight()-6)) };
  } while (g.getPixel(p.x, p.y));
  // draw the apple, and save it inthe array
  g.setPixel(p.x, p.y);
  apples.push(p);
}

function start() {
  clearInterval();
  // clear screen
  g.clear();
  g.drawRect(0,6,g.getWidth()-1, g.getHeight()-1);
  // reset score
  score = 0;
  drawScore();  
  // Setup snake position
  pos = {x:g.getWidth()/2,y:g.getHeight()/2}; // centre of the screen
  history = [[pos.x, pos.y]]; // reset the 'history' list
  g.setPixel(pos.x, pos.y);
  dir = {x:1,y:0}; // the direction of the snake
  // Now add randomly positioned apples
  apples = [];
  for (var i=0;i<10;i++)
    newApple();
  // update the screen  
  g.flip();
  // start off rendering frames
  setInterval(onFrame, 100);
}

// When Espruino starts up...
function onInit() {
  start();
}

function gameOver() {
  // stop the game
  clearInterval();
  // write 'game over' on the screen
  g.clear();
  var s = "Game Over!";
  g.drawString(s, (g.getWidth()-g.stringWidth(s))/2, g.getHeight()/2-4);
  g.flip();
  // when the button is pressed, restart
  setWatch(start, BTN, {debounce:50,edge:"rising"});
}

// called every 'frame' of the game
function onFrame() {
  if (BTNU.read()) dir = {x:0,y:-1};
  if (BTND.read()) dir = {x:0,y:1};
  if (BTNL.read()) dir = {x:-1,y:0};
  if (BTNR.read()) dir = {x:1,y:0};
  
  pos.x += dir.x;
  pos.y += dir.y;
  // remove tail
  while (history.length>=snakeLength) {
    var p = history.shift(); // remove first item from list
    g.setPixel(p[0], p[1], 0); // clear that pixel
  }
  // add current position onto the end
  history.push([pos.x, pos.y]);

  if (g.getPixel(pos.x, pos.y)) {
    // check for apples
    var wasApple = false;
    for (var i in apples)
      if (apples[i].x==pos.x && apples[i].y==pos.y) {
        wasApple = true;
        // delete this apple
        apples.splice(i,1);
        // add a new apple
        newApple();
        // change score and increase snake length
        snakeLength += 5;
        score += 10;
        drawScore();
        // break out so we don't check any more apples
        break;
      }
    if (!wasApple)
      gameOver();
  } else {
    g.setPixel(pos.x, pos.y);
    g.flip();
  }
}

onInit();
