up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose restart

bash:
	docker compose exec api bash

update:
	docker compose exec api composer update
	docker compose exec front bun update

test:
	docker compose exec api php artisan test
	docker compose exec front bun test tests
	docker compose exec front bun test:e2e

migrate:
	docker compose exec api php artisan migrate

types:
	docker compose exec api php artisan scramble:export
	bunx openapi-typescript ./api/api.json -o ./front/app/schema.d.ts
	rm ./api/api.json

format:
	docker compose exec api vendor/bin/pint

pre-commit:
	make update
	make types
	make format
	make test