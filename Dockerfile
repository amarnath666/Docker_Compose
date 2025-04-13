FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

RUN npm run build

ENV MONGOURI=mongodb://admin:admin@mongodb:27017/?authSource=admin

EXPOSE 3000

CMD ["npm", "run", "dev"]