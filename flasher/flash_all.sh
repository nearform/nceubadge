#!/bin/bash

while read CSVLINE; do
  URL=`echo $CSVLINE | cut -d, -f2`
  IMG=`echo $CSVLINE | cut -d, -f1`
  ./flash_user.sh $URL $IMG
done < name_images_and_urls.csv
