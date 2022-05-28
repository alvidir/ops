VERSION=0.1.0
REPO=alvidir
PROJECT=filebrowser
REMOTE=docker.io

all: build push deploy

push:
	podman tag localhost/${REPO}/${PROJECT}:${VERSION} ${REMOTE}/${REPO}/${PROJECT}:${VERSION}
	podman push ${REMOTE}/${REPO}/${PROJECT}:${VERSION}
	podman tag localhost/${REPO}/${PROJECT}:${VERSION}-mqworker ${REMOTE}/${REPO}/${PROJECT}:${VERSION}-mqworker
	podman push ${REMOTE}/${REPO}/${PROJECT}:${VERSION}-mqworker

deploy:
	podman-compose -f compose.yaml up -d

follow:
	podman logs --follow --names ${PROJECT}-server
	
undeploy:
	podman-compose -f compose.yaml down
