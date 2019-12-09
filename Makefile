deploy:
	git checkout master
	git merge --ours gh-pages
	git checkout gh-pages
	git merge master
