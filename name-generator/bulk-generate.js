// bulk-generate takes a CSV with a list of firstname, lastname, url and generates another csv with name as base64 encoded image followed by URL. This data is then flashed to the badge for each person.
//
// Copyright nearForm and Conor O'Neill 2017 conor@conoroneill.com
// Apache License Version 2.0
//
// Note that Mac users first must run:
// brew install openssl imagemagick pkg-config cairo libpng jpeg giflib
// followed by:
// npm install
// Then run the tool just with
// node bulk-generate.js

var fs = require('fs');
var csv = require('csv');
var csvWriter = require('csv-write-stream')
var writer = csvWriter({ sendHeaders: false })



var Canvas = require('canvas')
    , Image = Canvas.Image
    , canvas = new Canvas(128, 64)
    , ctx = canvas.getContext('2d');


function nameToImage(firstname, lastname) {
    currentFontHeight = 28;
    ctx.font = currentFontHeight + 'px Verdana';

    if (ctx.measureText(firstname).actualBoundingBoxRight > ctx.measureText(lastname).actualBoundingBoxRight) {
        bigString = firstname;
    } else {
        bigString = lastname;
    }

    maxFound = false;
    while (!maxFound) {
        ctx.font = currentFontHeight + 'px Verdana';
        totalHeight = ctx.measureText(firstname).actualBoundingBoxAscent + ctx.measureText(firstname).actualBoundingBoxDescent + 4 + ctx.measureText(lastname).actualBoundingBoxAscent + ctx.measureText(lastname).actualBoundingBoxDescent;
        if ((ctx.measureText(bigString).actualBoundingBoxRight < 128) && (totalHeight < 64)) {
            maxFound = true;
        } else {
            currentFontHeight--;
        }
    }

    totalHeight = ctx.measureText(firstname).actualBoundingBoxAscent + ctx.measureText(firstname).actualBoundingBoxDescent + 4 + ctx.measureText(lastname).actualBoundingBoxAscent + ctx.measureText(lastname).actualBoundingBoxDescent;

    yIndent = Math.floor((64 - totalHeight) / 2) + ctx.measureText(firstname).actualBoundingBoxAscent + ctx.measureText(firstname).actualBoundingBoxDescent;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 128, 64);
    ctx.fillStyle = 'white';
    xIndent = Math.floor((128 - ctx.measureText(firstname).actualBoundingBoxRight) / 2)
    ctx.fillText(firstname, xIndent, yIndent);
    yIndent = 64 - Math.floor((64 - totalHeight) / 2) - ctx.measureText(lastname).actualBoundingBoxDescent;
    xIndent = Math.floor((128 - ctx.measureText(lastname).actualBoundingBoxRight) / 2)
    ctx.fillText(lastname, xIndent, yIndent);


    require('fs').writeFileSync('say-my-name.png', canvas.toBuffer('png'))

    const execSync = require('child_process').execSync;

    cmd = execSync("convert say-my-name.png -resize 128x64\! -depth 1  gray:say-my-name.raw");
    b64Image = execSync("openssl base64 < say-my-name.raw | tr -d '\n'").toString();
    return b64Image;
}

writer.pipe(fs.createWriteStream('name_images_and_urls.csv'));

var parser = csv.parse({ delimiter: ',' }, function (err, data) {

    for (var i = 0; i < data.length; i++) {
        writer.write({ name: nameToImage(data[i][0], data[i][1]), url: data[i][2] })
    }
    writer.end();
    console.log("Name-images and URLs in name_images_and_urls.csv");
});

fs.createReadStream(__dirname + '/names.csv').pipe(parser);
