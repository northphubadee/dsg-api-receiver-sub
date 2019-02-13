FROM node:8.10.0-slim
EXPOSE 4000
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn prisma deploy
ENV PRISMA_ENPOINT=""
CMD ["yarn", "start"]