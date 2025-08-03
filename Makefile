.PHONY: fmt clean

fmt: #Format
	npx prettier . --write

clean: #Tidy repo
	find . -type d -name "node_modules" | xargs rm -rf