deploy: setup build

serve:
	docker run -v ${PWD}:/docs -it -p 8000:8000 imagecharts/documentation

build:
	docker run -v ${PWD}:/docs -it -p 8000:8000 imagecharts/documentation build

update: update-logo

test: test-python

test-python:
	docker run -v $(shell pwd)/docs:/docs python:2.7-slim python /docs/reference/Data_format/encoding.py -v

# test-node:
# 	docker run -v $(shell pwd)/docs:/docs node:10-slim node /docs/reference/Data_format/encoding.js

update-logo:
	rm -rf /tmp/website
	git clone git@github.com:image-charts/website.git /tmp/website
	cp -R -v /tmp/website/app/logo docs/
	rm -v docs/logo/*.md
