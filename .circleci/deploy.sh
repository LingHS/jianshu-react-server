#!/bin/bash 

SSH_USER=root
SSH_HOST=47.94.96.223
SRC=`pwd`"/"
DES=/home/web
NOW=`date +"%Y-%m-%d %H:%M:%S"`


rsync -vzrc --delete --exclude ".git" --exclude ".env" --exclude ".circleci" --exclude "src" --exclude "tsconfig.json" $SRC $SSH_USER@$SSH_HOST:$DES
#ssh $SSH_USER@$SSH_HOST "<remote deploy command>"