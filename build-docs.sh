#!/bin/bash
# You currently need to have Hugo installed locally. 
# brew install hugo
# Will add docs building to CircleCI at some point
cd docs-source
hugo
cd public
cp -R * ../../docs
cp ../../web_bluetooth/* ../../docs/web_bluetooth
