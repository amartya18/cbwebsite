deploy:
	git add .
	git commit -a --allow-empty-message -m ''
	git push 
	git checkout gh-pages
