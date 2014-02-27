#!/bin/sh

input="input"
output="output"

find "./${input}" | grep -e "\.ts$" | sed -e "s/^.\/\///g" | while read line; do
  dir=`echo ${line} | sed -e "s/\/[^\/]*\.ts$//g" | sed -e "s/${input}/${output}/"`
  tsc --outDir ${dir} ${line}
done

echo "completed!"
