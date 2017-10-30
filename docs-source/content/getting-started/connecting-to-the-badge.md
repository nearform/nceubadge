---
title: "Connecting to the Badge"
weight: 5
date: 2017-10-28T15:30:33+01:00
draft: false
---

Any modern computer with Bluetooth 4+ should be able to connect to the badge as follows:

## Make your badge connectable

* Enter the Konami code, if you haven't already: Up, Up, Down, Down, Left, Right, Left, Right, B, A.
* Select "Make badge connectable" in the menu
* Note the Badge ID

## Mac
Web Bluetooth on Chrome should just work if your Chrome is up to date. So simply go to the [Web IDE here](https://www.espruino.com/ide/). Then:

* Click the connect icon in the top left corner
* Select the Web Bluetooth option
* If more than one badge is listed, select your badge ID
* Click Pair
* A few seconds later you'll have a REPL running and you can run JS directly on your badge over Bluetooth!

## Windows
The easiest option is to install the standalone Electron-based Espruino IDE. Download it [from here](https://www.espruino.com/Web+IDE#as-a-native-application)

* If your're using Windows 8.1, or 10 you'll need to pair your Badge using the Windows Bluetooth menu before it'll appear in the Web IDE.
* (Any time you remove the badge battery, you'll have to remove the Badge from the list of paired devices in Windows and re-pair)
* Run the IDE
* Click the connect icon in the top left corner
* Select the Web Bluetooth option
* If more than one badge is listed, select your badge ID
* Click Pair
* A few seconds later you'll have a REPL running and you can run JS directly on your badge over Bluetooth!


## Linux / iOS / Android
* See instructions [here](https://www.espruino.com/Puck.js+Quick+Start)

More setup (and general) information is available on the [Puck.js site](https://www.espruino.com/Puck.js) if you get stuck. Most, but not all, of the information applies to the badge.
