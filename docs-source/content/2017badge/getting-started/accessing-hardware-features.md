---
title: "Accessing Hardware Features"
weight: 8
date: 2017-10-28T15:30:33+01:00
draft: false
---

This is an Open Source Hardware project. Schematics and board design files are available in the [/hardware directory of the repo](https://github.com/nearform/nceubadge/tree/master/hardware).

The badge uses the same core module as the [Puck.js](https://www.espruino.com/Puck.js) and can run most of the same software. 

Hardware Features include:

* nRF52832 SoC - 64MHz ARM Cortex M4, 64kB RAM, 512kB Flash, running the Espruino stack
* Bluetooth Low Energy
* Powered by a CR2032 battery which can last up to a week depending on what code you are running
* Daylight-readable LCD screen
* 6 input buttons
* Capacitive touch sensors on all 6 corners
* Digital I/O on all 6 corners
* Analogue-in on 3 corners
* Prototyping area with 8 CPU pins accessible
* Digital I/O on all 8 pins
* Analogue-in on 4 pins
* Holes for LEDs on all 6 corners
* NFC antenna
* SWD programming pins


### Proto holes and corner holes
You write or read a digital high/low to/from a hole with: 

```javascript
digitalWrite(hole, value);
digitalRead(hole);
```

where hole is one of D0, D1, D2, D3, D4, D5, D6, D7, D8 (D0 at top), CORNER1, CORNER2, CORNER3, CORNER4, CORNER5, CORNER6 and value is 0 or 1.

You read an analogue value from a hole with: 

```javascript
analogRead(hole);
```

where hole is one of D2, D3, D4, D5, CORNER4, CORNER5, CORNER6.

### Buttons
You can use a generic call like 

```javascript
digitalRead(button);
``` 

where button is one of BTNA, BTNB, BTNU, BTND, BTNL, BTNR

or with a Button-specific call 

```javascript
BTNx.read();
``` 

where BTNx is one of BTNA, BTNB, BTNU, BTND, BTNL, BTNR

### LEDs
If you add LEDs to the corner holes, you can turn them on/off with a generic call

```javascript
digitalWrite(led, value);
```

where led is one of LED1, LED2, LED3, LED4, LED5, LED6.

or with an LED-specific call 

```javascript
LEDx.write(value);
```

where LEDx is one of LED1, LED2, LED3, LED4, LED5, LED6 and value is 0 or 1.

### Graphics
In many Espruino examples on the main site, you'll find setup code for different types of screens. That has already been taken care of for you on the badge and you can just access the graphics functions directly. e.g.

```javascript
g.clear();
g.drawString("Hello World",0,0);
g.flip();
``` 

### Capacitive Sense
You can read the capacitance (and hence touch) from the 6 corners using 

```javascript
Badge.capSense(corner);
```

where corner is one of CORNER1, CORNER2, CORNER3, CORNER4, CORNER5, CORNER6. See [note here](/getting-started/using-prototyping-area/#important-note-re-leds-and-touch-sensing) about issue of using sense and LEDs together.


### Battery Percentage
You can get an estimate of the battery level by calling 

```javascript
Badge.getBatteryPercentage();
```

It returns an approximate battery percentage remaining based on a normal CR2032 battery (2.8 - 2.2v).


### Set Screen Contrast
You can set the screen contrast with

```javascript
Badge.setContrast(c)
```

where c is a float from 0 to 1

### NFC
You can set the URL that the NFC antenna broadcasts to NFC-capable phones by calling

```javascript
NRF.nfcURL("url")
```

where URL is something like https://www.nearform.com

## Advanced Only: Flashing updated firmware
If you need to flash new firmware to the badge, you must first put it in DFU mode by holding BTNA as you insert the battery and quickly letting go of BTNA. Download the Distribution Packet Zip file containing the new firmware to your phone and use nRF Toolbox on either [Android](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nrftoolbox&hl=en) or [iOS](https://itunes.apple.com/us/app/nrf-toolbox/id820906058?mt=8) to send it to the badge.

Please only do this if you are sure you need it. By using a stock badge build from the Espruino site, you'll lose the built-in NodeConf EU main.js code and will just have a REPL over Bluetooth on your badge.