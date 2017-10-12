Original Badge Code
=====================

As they come, the badges are flashed with the standard Espruino HEXBADGE 
firmware. *Then* the espruino CLI is used to take a custom HEX file based
on `main.js` which is written it direct to flash.

This is as if `E.setBootCode` was called with the badge's code. The bonus
is that everything can be executed from Flash - freeing up LOADS of RAM.


```
# Install CLI
npm install -g espruino

# create hex file from CLI
espruino --board HEXBADGE main.js -ohex main.hex

# optional flash of hexbadge firmware
nrfjprog --family NRF52 --clockspeed 50000 --program espruino_1v94.159_hexbadge.hex --chiperase --reset
# erase saved code area
nrfjprog --family NRF52 --clockspeed 50000 --erasepage 0x71000-0x76000
# Actually program file
nrfjprog --family NRF52 --clockspeed 50000 --program main.hex --reset
```
