FROM node:10.15.3

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY build/package*.json /usr/src/app/

RUN npm install --only=production

# Bundle app source
# Make sure you run grunt build before you build docker image
COPY build/src/ /usr/src/app/src/
COPY build/views/ /usr/src/app/views/
COPY build/public/ /usr/src/app/public/

EXPOSE 8080
CMD [ "npm", "start" ]
