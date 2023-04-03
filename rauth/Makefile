deploy:
	@podman-compose -f compose.yaml up -d
	
undeploy:
	@podman-compose -f compose.yaml down

purge:
	@-podman volume rm -f rauth_dbdata
	@-podman image rm -f localhost/rauth_nginx