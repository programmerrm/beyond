#!/bin/bash
set -e

echo "STEP 1 ::: BUILD FRONTEND"
docker compose -f docker-compose.yml build frontend
echo "FRONTEND BUILD SUCCESSFULLY"

echo "STEP 2 ::: START FRONTEND"
docker compose -f docker-compose.yml up -d frontend
echo "FRONTEND RUN SUCCESSFULLY"

echo "STEP 3 ::: BUILD & START NGINX"
docker compose -f docker-compose.yml build nginx
docker compose -f docker-compose.yml up -d nginx

echo "STEP 4 ::: RELOAD NGINX"
docker compose -f docker-compose.yml exec nginx nginx -t
docker compose -f docker-compose.yml exec nginx nginx -s reload

echo "PRODUCTION DEPLOY FINISHED."
