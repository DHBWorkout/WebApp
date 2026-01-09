FROM node:19

WORKDIR /app

RUN npm install -g serve

USER 526

COPY --chown=526 package.json package-lock.json ./
RUN npm ci

COPY --chown=526 . /app

EXPOSE 3000
ENTRYPOINT ["sh", "start.sh"]

