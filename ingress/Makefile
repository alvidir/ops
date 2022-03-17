VERSION=1.0.0
REPO=alvidir
PROJECT=nginx-lua
REMOTE=docker.io

all: build push deploy

build:
	podman build -t ${REPO}/${PROJECT}:${VERSION} -f ./images/nginx/containerfile .

push:
	podman tag localhost/${REPO}/${PROJECT}:${VERSION} ${REMOTE}/${REPO}/${PROJECT}:${VERSION}
	podman push ${REMOTE}/${REPO}/${PROJECT}:${VERSION}

deploy:
	podman-compose -f container-compose.yaml up

follow:
	podman logs --follow --names global-nginx
	
undeploy:
	podman-compose -f container-compose.yaml down
