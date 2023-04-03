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
	@podman build -t $(scope)/envoy:$(version) -f ./container/envoy/containerfile .
	@podman tag $(scope)/envoy:$(version) $(host)/$(scope)/envoy:$(version)

publish: images
	@podman push $(host)/$(scope)/envoy:$(version)

purge:
	@-podman image rm localhost/$(scope)/envoy:$(version)