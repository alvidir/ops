deploy-all:
	podman-compose -f rauth/compose.yaml up --remove-orphans -d
	podman-compose -f ingress/compose.yaml up --remove-orphans -d

undeploy-all:
	podman-compose -f ingress/compose.yaml down
	podman-compose -f rauth/compose.yaml down