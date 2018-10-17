FROM node:carbon-slim

# Create app directory
WORKDIR /git/trello-api

# Install app dependencies
COPY package.json /git/trello-api/
RUN npm install

# Bundle app source
COPY . /git/trello-api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]