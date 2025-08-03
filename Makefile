.PHONY: fmt clean ri

fmt: #Format
	npx prettier . --write

clean: #Tidy repo
	find . -type d -name "node_modules" | xargs rm -rf

ri: #Run index.ts as script
	ts-node src/index.ts