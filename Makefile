.PHONY: build

deploy: setup build

serve:
	docker run -v ${PWD}:/docs -it -p 8000:8000 imagecharts/documentation

build:
	mkdir -p docs/fonts
	# note: we use "$$" below in "$$item" to escape automatic interpolation
	curl -s https://image-charts.com/swagger.json | jq -r '.paths[].get.parameters[] | select(.name == "icff").enum | reduce .[] as $$item ([]; . + ["`" + $$item + "`"]) | join(", ")' > docs/fonts/google-fonts.md
	# note: netlify does not support docker
	# docker run -v ${PWD}:/docs -it -p 8000:8000 imagecharts/documentation build
	mkdocs build
	# don't forget to copy the _redirects file to the publish "site/" folder
	cp _redirects site/

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
