#!/bin/bash
###############################################################################
# Project: FIUBA - CEIoT - DAW 
# Date: June 2020
# Usage:
#       ./run_phpadmin.sh mysql-net mysql-server 8085
# 
###############################################################################

#########[ Settings & Data ]###################################################

CONTAINER_NAME=phpadmin
NETWORK_NAME=$1
MYSQL_HOST=$2
HOST_PORT=$3

#########[ Script commands ]###################################################

echo "{container:$CONTAINER_NAME, net:$NETWORK_NAME, mysql:$MYSQL_HOST, port:$HOST_PORT}"

docker run \
--rm \
--detach \
--name $CONTAINER_NAME \
--network $NETWORK_NAME \
--env PMA_HOST=$MYSQL_HOST \
--publish $HOST_PORT:80 \
phpmyadmin/phpmyadmin

#########[ Enf of file ]#######################################################
