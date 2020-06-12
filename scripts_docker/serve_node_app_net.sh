#!/bin/bash
CONTAINER_NAME=nodejs-container
APP_DIR=$1
FILE=$2
HOST_PORT=$3
NET=$4

CONTAINER_WORKDIR=/home/node/app
CONTAINER_PORT=3000

echo "{$CONTAINER_NAME, dir:$APP_DIR, file:$FILE, port:$HOST_PORT}"  

docker run  --rm  --interactive \
--name $CONTAINER_NAME \
--network $NET \
--publish $HOST_PORT:$CONTAINER_PORT \
--volume $APP_DIR:$CONTAINER_WORKDIR \
abassi/nodejs-server:10.0-dev \
nodemon $CONTAINER_WORKDIR/$FILE
