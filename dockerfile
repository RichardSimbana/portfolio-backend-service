# build stage
# FROM node:lts-alpine AS build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
#RUN npm run build

# prod stage
# FROM nginx:stable-alpine AS production-stage
# COPY --from=build-stage /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm ci --only=production

COPY . .

EXPOSE 80

CMD ["node", "index.js"]