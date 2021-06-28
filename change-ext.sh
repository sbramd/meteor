#!/bin/bash

for f in $(find src -name "*.$1")
do
	[ -f "$f" ] && mv -v "$f" "${f%$1}$2"
done
