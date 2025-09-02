FROM node:24.7.0-slim

RUN apt-get update && apt-get install -y git make
RUN npm install -g --unsafe-perm typescript ts-node
RUN export NODE_OPTIONS="--metrics=0"