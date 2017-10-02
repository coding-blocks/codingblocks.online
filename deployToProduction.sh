#!/bin/sh

rm -rf dist/
ember build --environment=production
ssh -o StrictHostKeyChecking=no -i key.pem $USER@$SERVER "rm -rf ~/frontends/codingblocks.online/*;"
scp -o StrictHostKeyChecking=no -i key.pem -r dist/* $USER@$SERVER:~/frontends/codingblocks.online
