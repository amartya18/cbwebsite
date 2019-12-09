deploy:
	git checkout master
	git merge -s ours gh-pages
	git checkout gh-pages
	git merge master
