FROM node:20.12.2
WORKDIR /app
COPY app ./app
WORKDIR /app/app
RUN npm install