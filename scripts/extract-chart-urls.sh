#!/usr/bin/env bash
# require ripgrep
rg --no-filename --no-heading --no-line-number --trim --type md -e "(/chart\?[^\) ]+)" --only-matching ..
