# NodeConf EU 2017 Badge

![Open Source Hardware](/img/oshw-logo-100-px.png) ![Board](/img/nceubadge-100px.png) 

### All documentation including the Getting Started Guide is available on [nodeconfeubadge.org](http://nodeconfeubadge.org)

## To-Dos
- [ ] Getting Started Guide
- [ ] Make repo public on Monday morning
- [ ] Remove robots.txt from docs site on Monday morning
- [ ] Update default software to remove Fonz and use NodeConf EU logo
- [x] Figure out likely flow of user from arrival at event to hacking
- [x] App to take person's name and spit out code for Gordon
- [x] Docs site
- [ ] Grab NFC URL from GDocs
- [ ] Complete the Challenges doc
- [ ] Decide what we tell people on Sunday
- [x] What appears on https://nf.ie/nceubadge ??
- [ ] Other code that needs to be written?
- [x] Hardware design files
- [x] OSHW logo
- [ ] Pin-Out description
- [ ] RPi Beacons - stretch goal
- [ ] RPi Photobooth - stretch goal
- [ ] Simon Game using Buzzer and Touch
- [ ] Badge to Badge Comms
- [ ] Communicate with Garmin or Fitbit
- [ ] Communicate with the Bluetooth strip
- [ ] Basic LED connection instructions
- [ ] Content of Gordon's talk and workshop
- [ ] Decide how winner will be picked
- [ ] Spot prizes?


## Overall flow from arrival of attendee at venue

* Arrive at NodeConf EU and go to desk
* Macbook or Linux Laptop is connected to programming Jig
* Battery is put in a badge and slotted into Jig
* App running on laptop prompts for first and last name
* Grab NFC URL from GDocs?
* App generates image as code. Somehow Gordon takes that, adds it to default app and flashes to a badge
* Person is given badge
* URL printed on badge will guide them to https://nf.ie/nceubadge. That is private until 9am Monday
* Smart people may figure out it's basically a Puck and how to connect to it
* Open up repo at 9am
* Gordon talks at 9am and explains the badge
* Konami key sequence revealed
* Docs site URL give and talks about getting started guide
* Challenges described and prize announced
* Hacking station described
* People can connect with their Macs and try various sample apps on docs site
* People can hack the hardware using Espruino site and docs site
* People can try the challenges
* Gordon runs the workshop
* Winners announced on Wednesday (at dinner?)


## Hardware
This is an Open Source Hardware project. Schematics and board design files are available in the /hardware directory

## Code
### Main
* [Pre-installed badge code](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/main.js)

### Games

* [Flappy Bird](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/flappybird.js)
* [Snake](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/snake.js)
* [Simple Mario](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/mario.js)
* [Asteroids](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/asteroids.js)
* [Click speed counter](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/click_counter.js)
* [T-Rex](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/trex.js)

### Misc

* [JS REPL on your badge!](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/repl.js)
* [Display a Menu](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/menu.js)
* [Etch-a-sketch](https://www.espruino.com/ide/#https://raw.githubusercontent.com/nearform/nceubadge/master/sketch.js)
