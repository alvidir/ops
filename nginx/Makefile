ifndef host
override host = docker.io
endif

ifndef scope
override scope = alvidir
endif

ifndef version
override version = latest
endif

images:
	@podman build -t $(scope)/nginx-lua:$(version) -f ./container/nginx-lua/containerfile .
	@podman tag $(scope)/nginx-lua:$(version) $(host)/$(scope)/nginx-lua:$(version)

publish: images
	@podman push $(host)/$(scope)/nginx-lua:$(version)

purge:
	@-podman image rm $(host)/$(scope)/nginx-lua:$(version)
	@-podman image rm localhost/$(scope)/nginx-lua:$(version)