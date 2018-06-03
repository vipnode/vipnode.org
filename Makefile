.node_modules: package-lock.json
	npm install && touch .node_modules

deps: .node_modules

run: deps
	./node_modules/.bin/nuxt

build: deps
	./node_modules/.bin/nuxt generate
