FROM nginx:stable-alpine
EXPOSE 80
RUN apk update
COPY docs /usr/share/nginx/html