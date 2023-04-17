.DEFAULT_GOAL := deploy

deploy:
	@podman-compose -f compose.yaml up -d
	
clean:
	@podman-compose -f compose.yaml down
	@podman image rm -f localhost/ingress_nginx
