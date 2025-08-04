.PHONY: fmt clean ri test

fmt: #Format
	npx prettier . --write

clean: fmt #Tidy repo
	find . -type d -name "node_modules" | xargs rm -rf
	find . -type d -name "dist" | xargs rm -rf

ri: fmt #Run index.ts as script
	ts-node src/index.ts

test: #Run all tests
	node --import tsx --test './tests/**/*.ts'