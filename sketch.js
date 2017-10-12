function cursor() {
  for (i=-2;i<=2;i++) {
    g.setPixel(x+i,y,!g.getPixel(x+i,y));
    g.setPixel(x,y+i,!g.getPixel(x,y+i));
  }
}
function onFrame() {
  cursor();
  if (BTNA.read()) { gr.setPixel(x,y,1); g.setPixel(x,y,1); }
  if (BTNB.read()) { gr.setPixel(x,y,0); g.setPixel(x,y,0); }
  if (BTNU.read()) y=(y+63)&63;
  if (BTND.read()) y=(y+1)&63;
  if (BTNL.read()) x=(x+127)&127;
  if (BTNR.read()) x=(x+1)&127;
  cursor();    
  g.flip();
}
var BTNS = [BTNU,BTND,BTNL,BTNR,BTNA,BTNB];
var gr = Graphics.createArrayBuffer(128,64,1);
var img = {width:128,height:64,bpp:1,buffer:g.buffer};
var x=64,y=32;
g.clear();
cursor();
g.flip();

var interval;
function onButton() {    
  if (digitalRead(BTNS)) {
    onFrame();
    if (!interval) interval = setInterval(onFrame,50);
  } else {
    if (interval) clearInterval(interval);
    interval = undefined;
  }    
}
setWatch(onButton, BTNA, {repeat:1,debounce:20,edge:"both"});
setWatch(onButton, BTNB, {repeat:1,debounce:20,edge:"both"});
setWatch(onButton, BTNU, {repeat:1,debounce:20,edge:"both"});
setWatch(onButton, BTND, {repeat:1,debounce:20,edge:"both"});
setWatch(onButton, BTNL, {repeat:1,debounce:20,edge:"both"});
setWatch(onButton, BTNR, {repeat:1,debounce:20,edge:"both"});
