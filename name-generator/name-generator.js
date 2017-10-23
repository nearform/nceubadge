// name-generator prompts for firstname/lastname and then generates base64 image data for saving on the NCEU badge
// It autoscales each person's name to make best use of the screen
//
// Copyright nearForm and Conor O'Neill 2017 conor@conoroneill.com
// Apache License Version 2.0
//
// Note that Mac users first must run:
// brew install openssl imagemagick pkg-config cairo libpng jpeg giflib
// followed by:
// npm install
// Then run the tool just with
// node name-generator.js

var Canvas = require('canvas')
    , Image = Canvas.Image
    , canvas = new Canvas(128, 64)
    , ctx = canvas.getContext('2d');

var prompt = require('prompt');
var colors = require("colors/safe");
const fs = require('fs');

prompt.start();
prompt.message = colors.rainbow("NCEUBadge");

prompt.get(['firstname', 'lastname'], function (err, result) {
    currentFontHeight = 28;
    ctx.font = currentFontHeight + 'px Arial';

    if (ctx.measureText(result.firstname).actualBoundingBoxRight > ctx.measureText(result.lastname).actualBoundingBoxRight) {
        bigString = result.firstname;
    } else {
        bigString = result.lastname;
    }

    maxFound = false;
    while (!maxFound) {
        ctx.font = currentFontHeight + 'px Arial';
        if (ctx.measureText(bigString).actualBoundingBoxRight < 128) {
            maxFound = true;
        } else {
            currentFontHeight--;
        }
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 128, 64);
    ctx.fillStyle = 'white';
    ctx.fillText(result.firstname, 0, currentFontHeight);
    ctx.fillText(result.lastname, 0, (2 * currentFontHeight) + 4);

    require('fs').writeFileSync('say-my-name.png', canvas.toBuffer('png'))
    console.log("Name image generated");

    const execSync = require('child_process').execSync;

    cmd = execSync("convert say-my-name.png -resize 128x64\! -depth 1  gray:say-my-name.raw");
    cmd = execSync("openssl base64 < say-my-name.raw | tr -d '\n' > say-my-name.b64");

    console.log("Base64 data saved to say-my-name.b64");

});