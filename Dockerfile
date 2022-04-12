FROM node:gallium
WORKDIR '/app'

COPY package.json .
RUN npm install 
COPY . .
