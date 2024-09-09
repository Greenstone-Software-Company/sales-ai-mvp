# File: rollback.sh
#!/bin/bash
CURRENT_SHA=$(cat current_deployment.txt)
PREVIOUS_SHA=$(cat previous_deployment.txt)

docker-compose pull salesai-frontend:${PREVIOUS_SHA} salesai-backend:${PREVIOUS_SHA}
docker-compose up -d salesai-frontend:${PREVIOUS_SHA} salesai-backend:${PREVIOUS_SHA}

echo ${PREVIOUS_SHA} > current_deployment.txt
echo ${CURRENT_SHA} > previous_deployment.txt
