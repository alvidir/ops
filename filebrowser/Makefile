VERSION=1.0.0
REPO=alvidir
PROJECT=filebrowser
REMOTE=docker.io

all: deploy

deploy:
	podman-compose -f compose.yaml up -d

follow:
	podman logs --follow --names filebrowser
	
undeploy:
	podman-compose -f compose.yaml down
