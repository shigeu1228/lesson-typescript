#!/bin/sh

input="input"
output="output"

find "./${input}" | grep -e "\.ts$" | sed -e "s/^.\/\///g" | sed -e "s/[^\/]*\.ts$//g" | uniq | while read line; do
  outDir=`echo ${line} | sed -e "s/${input}/${output}/"`
  tsc --outDir ${outDir} ${line}*.ts
done

echo "completed!"
