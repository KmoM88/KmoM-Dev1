FROM nginx:1.20.0
RUN apt-get update
COPY docs /usr/share/nginx/html