#!/bin/bash


token=$1
url=$2

dockerComposePath="/home/ubuntu/docker-compose.yaml"
tag=1

rm -rf dist/
npm run build-production

docker build . -t cr.yandex/crpg11k469bhc8lch9gm/overnight/landing:$tag

docker login \
         --username oauth \
         --password $token \
        cr.yandex

docker push  cr.yandex/crpg11k469bhc8lch9gm/overnight/landing:$tag


ssh $url docker login \
         --username oauth \
         --password $token \
        cr.yandex

ssh $url docker pull cr.yandex/crpg11k469bhc8lch9gm/overnight/landing:1
ssh $url docker-compose -f $dockerComposePath up -d --no-deps landing




