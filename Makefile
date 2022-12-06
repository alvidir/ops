deploy-all:
	podman-compose -f mailhog/compose.yaml up --remove-orphans -d
	podman-compose -f rabbitmq/compose.yaml up --remove-orphans -d
	podman-compose -f rauth/compose.yaml up --remove-orphans -d
	podman-compose -f filebrowser/compose.yaml up --remove-orphans -d
	podman-compose -f ingress/compose.yaml up --remove-orphans -d

undeploy-all:
	podman-compose -f ingress/compose.yaml down
	podman-compose -f filebrowser/compose.yaml down
	podman-compose -f rauth/compose.yaml down
	podman-compose -f rabbitmq/compose.yaml down
	podman-compose -f mailhog/compose.yaml down

deploy:
	podman-compose -f $(pod)/compose.yaml up --remove-orphans -d

undeploy:
	podman-compose -f $(pod)/compose.yaml down

follow:
	podman logs --follow --names $(srv)

purge:
	podman image rm -f localhost/rauth_nginx
	podman image rm -f localhost/filebrowser_nginx
	podman image rm -f localhost/ingress_nginx