FROM node:24.2.0-slim

RUN apt-get update && apt-get install -y git make
RUN npm install -g --unsafe-perm typescript
RUN export NODE_OPTIONS="--metrics=0"