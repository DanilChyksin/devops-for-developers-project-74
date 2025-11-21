FROM node:20.12.2

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json .

# Устанавливаем зависимости с обходом конфликта версий
RUN npm install --legacy-peer-deps

# Копируем ВСЕ файлы проекта (кроме тех, что в .dockerignore)
COPY . .

EXPOSE 3000

CMD ["npm", "start"]