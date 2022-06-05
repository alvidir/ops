VERSION=0.1.0
REPO=alvidir
PROJECT=filebrowser
REMOTE=docker.io

deploy:
	podman-compose -f compose.yaml up -d

follow:
	podman logs --follow --names ${PROJECT}-server
	
undeploy:
	podman-compose -f compose.yaml down
