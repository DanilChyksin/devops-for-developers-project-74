FROM node:20.12.2
WORKDIR /app
COPY app ./app
WORKDIR /app/app
# Копируем .env файл для тестов

RUN npm install