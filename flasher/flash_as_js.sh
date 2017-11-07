#!/bin/bash

# This generates JS code that will flash the badge's firmware
# into read-only memory

cd `dirname $0`
cd ../name-generator
node name-generator.js
cd ../flasher
CSVLINE=`cat ../name-generator/single_name_image_and_url.csv`
URL=`echo $CSVLINE | cut -d, -f3`
IMGB64=`echo $CSVLINE | cut -d, -f1`

# Quote args so we can shove them in sed later
REGEX="s/\//\\\\\//g"
URL=`echo $URL | sed -e $REGEX`
IMGB64=`echo $IMGB64 | sed -e $REGEX`

#echo $URL
#echo $IMGB64

cat main.js | sed -e "s/CUSTOM_BADGE_IMAGE/$IMGB64/" |  sed -e "s/CUSTOM_BADGE_URL/$URL/" > main.custom.js
espruino --board HEXBADGE.json main.custom.js -ohex main.custom.hex
echo ""

node flasherhack.js
