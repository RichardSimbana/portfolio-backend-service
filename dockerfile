#Base Image Node
FROM node:lts-alpine

#Tells Docker the folder that it should perform the commands
WORKDIR /usr/src/app

#Copies only package json 
COPY package*.json ./

#Installs NPM, if package json has not been changed, no install needed
RUN npm install

RUN npm ci --only=production

#Copies the rest of the application into the file system
COPY . .

#Tells Docker to open port 3000 on the container when its is running
EXPOSE 3000

#Runs node index.js to start the application
CMD ["node", "index.js"]