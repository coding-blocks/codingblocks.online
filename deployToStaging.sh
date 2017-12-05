#!/bin/sh

rm -rf dist/
ember build --environment=staging
chmod 600 key.pem
ssh -o StrictHostKeyChecking=no -i key.pem $USER@$SERVER "rm -rf ~/frontends/codingblocks.online.staging/*;"
scp -o StrictHostKeyChecking=no -i key.pem -r dist/* $USER@$SERVER:~/frontends/codingblocks.online.staging
