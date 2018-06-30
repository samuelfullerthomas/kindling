.PHONY: watch build bootstrap;

BIN=node_modules/.bin

watch:
	@NODE_ENV=development $(BIN)/webpack-dev-server --open

build:
	@NODE_ENV=production webpack

bootstrap:
	@npm install

test:
	@standard
	@$(BIN)/jest