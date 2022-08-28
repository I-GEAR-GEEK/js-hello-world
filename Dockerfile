FROM node:16-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN npm install

CMD ["npm","run", "start"]