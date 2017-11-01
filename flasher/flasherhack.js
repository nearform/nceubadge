/* This is a big hack - basically you can't directly upload
main.js because it's too big.

Instead, we take the hex file created by the code in flash_user.sh
and turn it into Espruino commands that write the memory space via
JS.
*/

console.log(`
var f = require("Flash");
f.erasePage(0x71000);
f.erasePage(0x72000);
f.erasePage(0x73000);
f.erasePage(0x74000);
f.erasePage(0x75000);
`);
var hex = require("fs").readFileSync("main.custom.hex").toString().split("\n");
var addrHi = 0;
hex.forEach(function(hexline) {
  var cmd = hexline.substr(1,2);
  if (cmd=="02") {
    addrHi = parseInt(hexline.substr(9,4),16) << 16;
  } else if (cmd=="10") {
    var addr = "0x"+(addrHi + parseInt(hexline.substr(3,4),16)).toString(16);
    var data = [];
    for (var i=0;i<16;i++) data.push(parseInt(hexline.substr(9+(i*2),2),16));
    console.log(`f.write([${data}],${addr});`);
  }
});

