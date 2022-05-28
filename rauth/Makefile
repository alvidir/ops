VERSION=1.2.0
REPO=alvidir
PROJECT=rauth
REMOTE=docker.io

all: build push deploy

build:
	podman build -t ${REPO}/${PROJECT}:${VERSION}-nginx -f ./images/nginx/containerfile .

push:
	podman tag localhost/${REPO}/${PROJECT}:${VERSION} ${REMOTE}/${REPO}/${PROJECT}:${VERSION}
	podman push ${REMOTE}/${REPO}/${PROJECT}:${VERSION}

deploy:
	podman-compose -f compose.yaml up -d

follow:
	podman logs --follow --names rauth-server
	
undeploy:
	podman-compose -f compose.yaml down
