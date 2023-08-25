FROM node:18

WORKDIR /app

COPY package*.json ./

ARG VITE_API

ENV VITE_API=$VITE_API

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]