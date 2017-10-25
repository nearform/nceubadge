# name-generator

This tool prompts for a NodeConf EU attendee's firstname/lastname and then generates base64 image data for saving on the NCEU badge.

It scales each person's name to make best use of the screen

Copyright nearForm and Conor O'Neill 2017 conor@conoroneill.com
Apache License Version 2.0

Usage (Mac only for the moment):

Install [Node.js](https://nodejs.org/en/download/current/) and then:

```
git clone https://github.com/nearform/nceubadge
cd nceubadge/name-generator

# Mac OS
brew install openssl imagemagick pkg-config cairo libpng jpeg giflib
# Debian/Ubuntu Linux
sudo apt-get install imagemagick pkg-config libcairo2-dev libpng-dev libjpeg-dev libgif-dev

npm install
```



Then run the tool just with

```
node name-generator.js
```
