#!/bin/bash
###############################################################################
# Project: FIUBA - CEIoT - DAW 
# Date: June 2020
# Usage:
#       ./start_mysql.sh mysql-net "$PWD"/database
# 
###############################################################################

#########[ Settings & Data ]###################################################

CONTAINER_NAME=mysql-server
NETWORK_NAME=$1
DATABASE_DIR=$2

#########[ Script commands ]###################################################

echo "Init MySQL 5.7 {container:$CONTAINER_NAME, network:$NETWORK_NAME, db:$DATABASE_DIR}"

docker run \
--rm \
--detach \
--name $CONTAINER_NAME \
--network $NETWORK_NAME \
--env MYSQL_ROOT_PASSWORD=userpass \
--volume $DATABASE_DIR/dumps:/docker-entrypoint-initdb.d \
--volume $DATABASE_DIR/data:/var/lib/mysql \
mysql:5.7

#########[ Enf of file ]#######################################################
