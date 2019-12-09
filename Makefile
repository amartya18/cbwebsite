deploy:
	git add .
	git commit -a --allow-empty-message -m ''
	git push -u origin master	
	git checkout gh-pages
