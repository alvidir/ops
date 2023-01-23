ifndef host
override host = docker.io
endif

ifndef owner
override owner = alvidir
endif

ifndef version
override version = latest
endif

build:
	podman build -t $(owner)/nginx-lua:latest -f ./container/nginx-lua/containerfile .

release: build
	podman tag $(owner)/nginx-lua:latest $(host)/$(owner)/nginx-lua:$(version)
	podman push $(host)/$(owner)/nginx-lua:$(version)
