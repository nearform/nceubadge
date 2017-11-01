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
* Capacative touch sensors on all 6 corners
* Prototyping area with 8 CPU pins accessible
* Holes for LEDs on all 6 corners
* NFC antenna
* SWD programming pins


### CPU Pins (Vertical line of holes along left hand edge of badge)
You write to or read from a pin with: 

```javascript
digitalWrite(pin, value);
digitalRead(pin);
```

where pin is one of D0, D1, D2, D3, D4, D5, D6, D7, D8 (D0 at top) and value is 0 or 1.

The firmware has some extra API calls and variables for some of the badge features. You can use them as follows:

### Buttons
You can use  

```javascript
digitalWrite(button, value);
digitalRead(button);
``` 

where value is 1 or 0 and button is one of BTNA, BTNB, BTNU, BTND, BTNL, BTNR

### LEDs
If you add LEDs to the corner holes, you can turn them on/off with 

```javascript
digitalWrite(led);
```

where led is one of LED1, LED2, LED3, LED4, LED5, LED6.

### Graphics
In many Espruino examples on the main site, you'll find setup code for different types of screens. That has already been taken care of for you on the badge and you can just access the graphics functions directly. e.g.

```javascript
g.clear();
g.drawString("Hello World",0,0);
g.flip();
``` 

### Capacative Sense
You can read the capacitance (and hence touch) from the 6 corners using 

```javascript
Badge.capSense(corner);
```

where corner is one of CORNER1, CORNER2, CORNER3, CORNER4, CORNER5, CORNER6. 


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

*NOTE: If your phone is having difficulty picking up the NFC URL, it is likely that the tuning capacitors on your badge need to be changed to different values. Head on over to the Hacking Lounge to get them replaced or be shown how to do it yourself.*

## Advanced: Flashing updated firmware
If you need to flash new firmware to the badge, you must first put it in DFU mode by holding BTNA as you insert the battery and quickly letting go of BTNA. Download the Distribution Packet Zip file containing the new firmware to your phobe and use nRF Toolbox on either [Android](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nrftoolbox&hl=en) or [iOS](https://itunes.apple.com/us/app/nrf-toolbox/id820906058?mt=8) to send it to the badge.
