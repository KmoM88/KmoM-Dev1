# KmoM-Dev1
<h2>Personal page</h2>

Personal page project. Hosted on github pages for the moment. Design from https://html5up.net/hyperspace/ and https://html5up.net/multiverse.

Index.html inside /docs.

Dockerfile & Docker-compose to test the page with nginx:stable-alpine image on port 8080.

docker image build --tag kmom/custom-nginx:1.0 .
docker container run --rm --detach --name custom-nginx-1.0 --publish 8080:80 kmom/custom-nginx:1.0
docker image push kmom/custom-nginx:1.0

docker-compose up --detach