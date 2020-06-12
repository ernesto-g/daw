#!/bin/bash
CONTAINER_NAME=phpadmin
NETWORK_NAME=$1
MYSQL_HOST=$2
HOST_PORT=$3
echo "{container:$CONTAINER_NAME, net:$NETWORK_NAME, mysql:$MYSQL_HOST, port:$HOST_PORT}"

docker run --rm -d --name $CONTAINER_NAME --network $NETWORK_NAME -e PMA_HOST=$MYSQL_HOST -p $HOST_PORT:80 phpmyadmin/phpmyadmin

