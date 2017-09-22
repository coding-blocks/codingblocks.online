#!/bin/sh

ember build -prod
rsync -avP dist/ /var/www/html/codingblocks.online
