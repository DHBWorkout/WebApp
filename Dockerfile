FROM node:19
WORKDIR /app

RUN npm install -g serve

COPY package.json package-lock.json ./
RUN npm ci

COPY . /app

EXPOSE 3000
CMD ["sh", "start.sh"]