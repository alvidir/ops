VERSION=1.2.0
REPO=alvidir
PROJECT=rauth
REMOTE=docker.io

release: build push

build:
	podman build -t ${REPO}/${PROJECT}:${VERSION}-nginx -f ./container/nginx/containerfile .

push:
	podman tag localhost/${REPO}/${PROJECT}:${VERSION}-nginx ${REMOTE}/${REPO}/${PROJECT}:${VERSION}-nginx
	podman push ${REMOTE}/${REPO}/${PROJECT}:${VERSION}-nginx

deploy:
	podman-compose -f compose.yaml up -d

follow:
	podman logs --follow --names ${PROJECT}-server
	
undeploy:
	podman-compose -f compose.yaml down
