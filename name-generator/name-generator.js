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
    ctx.font = currentFontHeight + 'px Comic Sans MS';

    // Below summed must be <= 64


    //
    // if it is then firstname Y origin is:
    //
    //
    // and lastname Y origin is:
    //
    //
    //



    if (ctx.measureText(result.firstname).actualBoundingBoxRight > ctx.measureText(result.lastname).actualBoundingBoxRight) {
        bigString = result.firstname;
    } else {
        bigString = result.lastname;
    }

    maxFound = false;
    while (!maxFound) {
        ctx.font = currentFontHeight + 'px Comic Sans MS';
        totalHeight = ctx.measureText(result.firstname).actualBoundingBoxAscent + ctx.measureText(result.firstname).actualBoundingBoxDescent + 4 + ctx.measureText(result.lastname).actualBoundingBoxAscent + ctx.measureText(result.lastname).actualBoundingBoxDescent;
        if ((ctx.measureText(bigString).actualBoundingBoxRight < 128) && (totalHeight < 64)) {
            maxFound = true;
        } else {
            currentFontHeight--;
        }
    }

    totalHeight = ctx.measureText(result.firstname).actualBoundingBoxAscent + ctx.measureText(result.firstname).actualBoundingBoxDescent + 4 + ctx.measureText(result.lastname).actualBoundingBoxAscent + ctx.measureText(result.lastname).actualBoundingBoxDescent;

    yIndent = Math.floor((64 - totalHeight) / 2) + ctx.measureText(result.firstname).actualBoundingBoxAscent + ctx.measureText(result.firstname).actualBoundingBoxDescent;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 128, 64);
    ctx.fillStyle = 'white';
    xIndent = Math.floor((128 - ctx.measureText(result.firstname).actualBoundingBoxRight) / 2)
    ctx.fillText(result.firstname, xIndent, yIndent);
    console.log("y1 = ", yIndent);
    console.dir(ctx.measureText(result.firstname));
    console.dir(ctx.measureText(result.lastname));

    yIndent = 64 - Math.floor((64 - totalHeight) / 2) - ctx.measureText(result.lastname).actualBoundingBoxDescent;
    console.log("y2 = ", yIndent);

    xIndent = Math.floor((128 - ctx.measureText(result.lastname).actualBoundingBoxRight) / 2)
    ctx.fillText(result.lastname, xIndent, yIndent);


    require('fs').writeFileSync('say-my-name.png', canvas.toBuffer('png'))
    console.log("Name image generated");

    const execSync = require('child_process').execSync;

    cmd = execSync("convert say-my-name.png -resize 128x64\! -depth 1  gray:say-my-name.raw");
    cmd = execSync("openssl base64 < say-my-name.raw | tr -d '\n' > say-my-name.b64");

    console.log("Base64 data saved to say-my-name.b64");

});