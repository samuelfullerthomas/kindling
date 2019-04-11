.PHONY: watch build bootstrap test;

BIN=node_modules/.bin

watch:
	@$(BIN)/webpack-dev-server --open --mode=development

build:
	@$(BIN)/webpack --mode=production

bootstrap:
	@npm install

test:
	@$(BIN)/standard
	@$(BIN)/jest

eject:
	@rm -rf .git && git init
