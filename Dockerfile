FROM node:18

WORKDIR /app

COPY . /app

COPY package*.json ./
RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]