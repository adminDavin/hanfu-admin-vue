#!bin/bash

cd `dirname $0`

npm run serve 2>&1 & > nohup.log
