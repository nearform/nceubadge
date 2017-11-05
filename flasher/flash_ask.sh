#!/bin/bash

cd `dirname $0`
cd ../name-generator
node name-generator.js
cd ../flasher
CSVLINE=`cat ../name-generator/single_name_image_and_url.csv`
URL=`echo $CSVLINE | cut -d, -f3`
IMG=`echo $CSVLINE | cut -d, -f1`
echo $URL
echo $IMG
./flash_user.sh $URL $IMG
