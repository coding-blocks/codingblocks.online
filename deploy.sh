#!/bin/sh

ember build --environment production
ssh omerjerk@cb.lk "rm -rf online/*;"
scp -r dist/* omerjerk@cb.lk:/home/omerjerk/online
