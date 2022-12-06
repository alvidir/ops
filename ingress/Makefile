deploy:
	podman-compose -f compose.yaml up -d
	
undeploy:
	podman-compose -f compose.yaml down

build:
	podman build -t alvidir/nginx-lua:latest -f ./container/nginx-lua/containerfile .

release: build
	podman tag alvidir/nginx-lua:latest docker.io/alvidir/nginx-lua:0.0.2
	podman push docker.io/alvidir/nginx-lua:0.0.2
