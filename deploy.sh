#!/bin/sh

ember build --environment=production
ssh omerjerk@cb.lk "rm -rf amoeba-frontend/*;"
scp -r dist/* omerjerk@cb.lk:/home/omerjerk/amoeba-frontend
