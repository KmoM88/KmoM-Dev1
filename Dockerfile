FROM nginx:1.20.0-alpine
RUN apt-get update
COPY src/index.html /usr/share/nginx/html/