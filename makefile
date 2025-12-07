up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose restart

bash:
	docker compose exec api bash

init:
	docker compose exec api cp .env.example .env
	docker compose exec api touch database/database.sqlite
	docker compose exec api composer install
	docker compose exec api php artisan key:generate
	docker compose exec api php artisan migrate:fresh --seed
	docker compose exec front bun install

update:
	docker compose exec api composer update
	docker compose exec front bun update

test:
	docker compose exec api php artisan test

migrate:
	docker compose exec api php artisan migrate

types:
	docker compose exec api php artisan scramble:export
	mv ./api/api.json ./front/api.json
	docker compose exec front bunx openapi-typescript ./api.json -o ./src/schema.ts --enum

format:
	docker compose exec api vendor/bin/pint

build:
	docker compose exec front bun run build-only

pre-commit:
	make types
	make format
	make test
	make build