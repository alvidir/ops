ifndef host
override host = docker.io
endif

ifndef owner
override owner = alvidir
endif

deploy:
	podman-compose -f compose.yaml up -d
	
undeploy:
	podman-compose -f compose.yaml down

build:
	podman build -t $(owner)/nginx-lua:latest -f ./container/nginx-lua/containerfile .

release: build
	podman tag $(owner)/nginx-lua:latest $(host)/$(owner)/nginx-lua:0.0.2
	podman push $(host)/$(owner)/nginx-lua:0.0.2
