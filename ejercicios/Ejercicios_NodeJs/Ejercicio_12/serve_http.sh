#!/bin/bash
CONTAINER_NAME=http-server
DIR_TO_SERVE=`realpath $1`
HOST_PORT=$2
docker run --rm --interactive --name $CONTAINER_NAME --volume $DIR_TO_SERVE:/dir_to_serve -p $HOST_PORT:8080 abassi/node-http-server
