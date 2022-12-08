brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-games: 
	node bin/brain-games.js

lint: 
	npx eslint

publish: 
	npm publish --dry-run
