deploy:
	@podman-compose -f compose.yaml up -d
	
undeploy:
	@podman-compose -f compose.yaml down

purge:
	@-podman image rm -f localhost/ingress_nginx