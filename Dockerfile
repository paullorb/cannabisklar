FROM node:20.10.0

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

COPY .next .next

CMD ["npm", "run", "dev"]