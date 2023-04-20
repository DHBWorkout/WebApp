FROM node:12
WORKDIR /app

RUN npm install -g serve

COPY package.json package-lock.json ./
RUN npm ci

COPY . /app

RUN npm run build

EXPOSE 3000
CMD ["serve", "-s", "build"]