FROM nginx:1.20.0
RUN apt-get update
COPY ./src /usr/share/nginx/html/
EXPOSE 8000:80