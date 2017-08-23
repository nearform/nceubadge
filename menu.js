/** Very simple menu using Up/Down and A */

// not needed on production firmwares
pinMode(BTNU,"input_pulldown");
pinMode(BTND,"input_pulldown");
pinMode(BTNL,"input_pulldown");
pinMode(BTNR,"input_pulldown");
// ------------------

var menu = require("graphical_menu");
var m;

// First menu
var mainmenu = {
  "" : {
    "title" : "-- Menu --"
  },
  "LED1 On" : function() { LED1.set(); },
  "LED1 Off" : function() { LED1.reset(); },
  "Submenu" : function() { m=menu.list(g, submenu); },
};

// Submenu
var submenu = {
  "" : {
    "title" : "-- SubMenu --"
  },
  "One" : undefined,
  "Two" : undefined,
  "< Back" : function() { m=menu.list(g, mainmenu); },
};
                                         

function onInit() {
  // Create and display the first menu
  m = menu.list(g, mainmenu);
}

setWatch(function() { 
  m.move(-1); // up
}, BTNU, {repeat:true,debounce:50,edge:"rising"});
setWatch(function() {
  m.move(1); // down
}, BTND, {repeat:true,debounce:50,edge:"rising"});
setWatch(function() {
  m.select(); // select
}, BTNA, {repeat:true,debounce:50,edge:"rising"});


onInit();

