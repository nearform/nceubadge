#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "USAGE:"
    echo "  flash_user.sh URL base64_image_data"
    exit 1
fi

URL=$1
IMGB64=$2

# Quote args so we can shove them in sed later
REGEX="s/\//\\\\\//g"
URL=`echo $URL | sed -e $REGEX`
IMGB64=`echo $IMGB64 | sed -e $REGEX`

#echo $URL
#echo $IMGB64

cat main.js | sed -e "s/CUSTOM_BADGE_IMAGE/$IMGB64/" |  sed -e "s/CUSTOM_BADGE_URL/$URL/" > main.custom.js
espruino --board HEXBADGE.json main.custom.js -ohex main.custom.hex
echo ""

while true; do
RETRY=0
sleep 1s
nrfjprog --family NRF52 --clockspeed 50000 --erasepage 0x71000-0x76000 || RETRY=1
if [ "$RETRY" -eq "0" ]; then
  nrfjprog --family NRF52 --clockspeed 50000 --program main.custom.hex --reset ||  RETRY=1
fi

if [ "$RETRY" -eq "1" ]; then
  echo ""
  echo -e "\e[31m************************************************\e[0m"
  echo -e "\e[31m         Flashing failed - retrying             \e[0m"
  echo -e "\e[31m************************************************\e[0m"
else
  rm main.custom.js main.custom.hex
  echo ""
  echo -e "\e[32m************************************************\e[0m"
  echo -e "\e[32m         Flashing OK!                           \e[0m"
  echo -e "\e[32m************************************************\e[0m"
  sleep 5s  
  exit 0
fi
done
