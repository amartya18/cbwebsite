deploy:
	git checkout gh-pages
	git merge master
	git commit -a --allow-empty-message -m ''
	git push
	git checkout master