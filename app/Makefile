setup: install db-migrate

.PHONY: ci
ci:
	@code=0; \
	docker compose -f ../docker-compose.yml up --abort-on-container-exit --exit-code-from app || code=$$?; \
	docker compose -f ../docker-compose.yml down --volumes --remove-orphans || true; \
	exit $$code

install:
	npm install

db-migrate:
	npm run migrate

build:
	npm run build

prepare-env:
	cp -n .env.example .env

start:
	NODE_ENV=production npm run start

dev:
	npx concurrently "make start-frontend" "make start-backend"

start-backend:
	npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite'

start-frontend:
	npx webpack --watch --progress

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

test:
	NODE_ENV=test npm test -s
