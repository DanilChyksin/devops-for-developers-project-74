FROM node:20.12.2

# Рабочая директория — корень приложения
WORKDIR /app

# 1. Копируем файлы для кэширования слоёв
COPY app/package.json package.json
COPY app/package-lock.json package-lock.json

RUN npm ci

# 2. Копируем весь исходный код
COPY app/. .

# 3. Makefile теперь тоже внутри /app
# (он копируется выше автоматически, т.к. COPY app/. .)
# Если хочешь явно:
# COPY app/Makefile Makefile

CMD ["make", "test-with-server"]