setup:
	$(MAKE) -j setup/node setup/docker

setup/node:
	cd server && yarn install

setup/docker:
	docker-compose build

start:
	$(MAKE) -j start/server start/docker

start/server:
	cd server && yarn start

start/docker:
	docker-compose up

hasura/apply:
	cd hasura && hasura migrate apply --admin-secret secret
	cd hasura && hasura metadata apply --admin-secret secret

hasura/rollback:
	cd hasura && hasura migrate apply --down 1 --admin-secret secret

pgcli:
	pgcli postgres://postgres:postgres@127.0.0.1:40764/postgres

.DEFAULT_GOAL := setup
