.DEFAULT_GOAL := deploy

deploy:
	@podman-compose -f compose.yaml up -d
	
clean:
	@podman-compose -f compose.yaml down
