#!/bin/sh

rm -rf dist/
ember build --environment=production
ssh -i key.pem $USER@$SERVER "rm -rf ~/frontends/codingblocks.online/*;"
scp -i key.pem -r dist/* $USER@$SERVER:~/frontends/codingblocks.online
