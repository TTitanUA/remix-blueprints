include .env

check:
	docker compose config
build:
	docker compose build
up: check
	docker compose up -d
down:
	docker compose down
ps:
	docker compose ps -a
run:
	docker compose stop editor
	docker compose run --rm --user=${UID}:${GID} -v ./source:/app -p 30000:3000 editor bash
	docker compose start editor
