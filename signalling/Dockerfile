FROM node:9.2.0
WORKDIR /usr/src/signalling

COPY package*.json ./

RUN npm install --only=production
COPY . .

EXPOSE 80
CMD [ "npm", "run", "start" ]
