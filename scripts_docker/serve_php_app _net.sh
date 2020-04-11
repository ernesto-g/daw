#!/bin/bash
CONTAINER_NAME=php-server
APP_DIR=`realpath $1`
HOST_PORT=$2

docker run --rm --network mysql-net --volume $APP_DIR:/usr/src/app --interactive --name $CONTAINER_NAME -p $HOST_PORT:8080 abassi/php-server:latest
