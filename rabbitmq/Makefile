deploy:
	podman-compose -f compose.yaml up

follow:
	podman logs --follow --names rabbitmq
	
undeploy:
	podman-compose -f compose.yaml down
