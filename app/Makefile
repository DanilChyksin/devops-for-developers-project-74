setup:
	make install
	make db-migrate

install:
	npm install --legacy-peer-deps

db-migrate:
	npm run migrate

build:
	npm run build

install-legacy:
	npm install --legacy-peer-deps

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