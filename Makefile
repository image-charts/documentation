#!/usr/bin/make -f

.PHONY: build

ifeq (, $(shell which docker))
MAKE_DOCS = mkdocs
else
MAKE_DOCS = docker run -v ${PWD}:/docs -it -p 8090:8000 imagecharts/documentation
endif

deploy: setup build

serve:
	$(MAKE_DOCS) serve

build: build-gallery
	mkdir -p docs/fonts
	# note: we use "$$" below in "$$item" to escape automatic interpolation
	curl -s https://image-charts.com/swagger.json | jq -r '.paths[].get.parameters[] | select(.name == "icff").enum | reduce .[] as $$item ([]; . + ["`" + $$item + "`"]) | join(", ")' > docs/GENERATED-google-fonts.md
	curl -s https://image-charts.com/errors.json | jq -r 'reduce .[] as $$item ([]; . + ["- `" + $$item.code + "`: " + $$item.description]) | join("\n")' > docs/GENERATED-error-codes.md

	$(MAKE_DOCS) build

	# don't forget to copy the robots.txt file to the publish "site/" folder
	cp -v robots.txt site/

build-gallery:
	npm install
	curl -s https://image-charts.com/gallery.json > ./scripts/gallery.json
	node scripts/generate-gallery.js > ./docs/gallery.md

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
