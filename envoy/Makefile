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
	podman build -t $(owner)/envoy:latest -f ./container/envoy/containerfile .

release: build
	podman tag $(owner)/envoy:latest $(host)/$(owner)/envoy:$(version)
	podman push $(host)/$(owner)/envoy:$(version)
