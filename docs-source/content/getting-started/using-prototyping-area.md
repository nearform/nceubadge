---
title: "Using the prototyping area and corners"
weight: 9
date: 2017-10-28T15:30:33+01:00
draft: false
---

You can add whatever hardware you like to the prototyping area. It's where you'll be connecting extra LEDs, buzzers etc. The column of holes along the board's left edge are connected to pins D0 to D8, Ground and Power. However all of the other holes in that grid are unconnected and can be used to attach your components together.

As always, the [Espruino web-site](https://www.espruino.com/) has lots more info and examples.

## Hole behaviour
The edge holes and the corner holes each have slightly different capabilities.

### Prototype holes

* 0 - Digital I/O Only
* 1 - Digital I/O Only
* 2 - Digital I/O and Analogue-in (ADC)
* 3 - Digital I/O and Analogue-in (ADC)
* 4 - Digital I/O and Analogue-in (ADC)
* 5 - Digital I/O and Analogue-in (ADC)
* 6 - Digital I/O Only
* 7 - Digital I/O and Serial TX
* 8 - Digital I/O and Serial RX
 
### Corner holes

* 1 - Digital I/O Only
* 2 - Digital I/O Only
* 3 - Digital I/O Only
* 4 - Digital I/O and Analogue-in (ADC)
* 5 - Digital I/O and Analogue-in (ADC)
* 6 - Digital I/O and Analogue-in (ADC)


## Important note re LEDs and touch sensing
As LEDn == CORNERn, adding most LEDs to a corner will prevent capacitive sense functioning on that corner. White and blue LEDs will probably work but not other colours.

## Board layout
This shows the basic board layout:


![Board basics](/images/badge_basics_01.png)
