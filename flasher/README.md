Badge Flashing
==============

This folder contains the code that is distributed on the badge,
as well as the scripts used to modify it for each user and flash it.

USAGE:
To remove the REPL and replace with a party parrot

- setup the name-generator (@`../name-generator`) as documented.
- globally install `espruino` and `babel-minify` to be used as command line tools ```npm install babel-minify espruino -g```
- run `./flash-as-js.sh`
- copy and paste the content of the file `./out.js` to the espruino IDE & upload it to the device.
