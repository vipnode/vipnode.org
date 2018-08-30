build: deps
	./node_modules/.bin/nuxt generate

deps: .node_modules

run: deps
	./node_modules/.bin/nuxt

.node_modules: package-lock.json
	npm install && touch .node_modules


# Deploy

GITDIST := git --git-dir=.git/worktrees/dist --work-tree dist

dist/: .git/worktrees/dist

.git/worktrees/dist:
	git worktree add --no-checkout ./dist gh-pages

status: .git/worktrees/dist
	$(GITDIST) add .
	$(GITDIST) status

deploy: .git/worktrees/dist build
	$(GITDIST) add .
	$(GITDIST) commit . -m "Deploy $(shell git describe --tags --dirty --always)" -e -v
	$(GITDIST) push origin gh-pages
