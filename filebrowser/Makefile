deploy:
	@podman-compose -f compose.yaml up -d
	
undeploy:
	@podman-compose -f compose.yaml down

purge:
	@-podman volume rm -f filebrowser_dbdata
	@-podman image rm -f localhost/filebrowser_nginx