# Этап 1 - сборка приложения
FROM node:alpine AS builder
WORKDIR /app

# Копирование и установка зависимостей
COPY app/package.json app/package-lock.json ./
RUN npm ci

# Копирование исходного кода и сборка проекта
COPY app/ .
RUN npm run build

# Этап 2 - интеграция приложения с nginx
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]