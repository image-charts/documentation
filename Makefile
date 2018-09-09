setup:
	pip install mkdocs mkdocs-material pymdown-extensions markdown-include pymdownx.highlight

serve:
	mkdocs serve

build:
	mkdocs build

update: update-logo

test: test-python


test-python:
	docker run -v $(pwd)/docs:/docs python:2.7-slim python /docs/reference/Data_format/encoding.py -v

update-logo:
	rm -rf /tmp/website
	git clone git@github.com:image-charts/website.git /tmp/website
	cp -R -v /tmp/website/app/logo docs/
	rm -v docs/logo/*.md
