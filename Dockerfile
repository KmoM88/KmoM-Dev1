FROM nginx:1.20.0-alpine
RUN apk update
COPY docs /usr/share/nginx/html