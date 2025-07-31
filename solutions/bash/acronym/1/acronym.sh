#!/usr/bin/env bash

reptext=" "
text=$1
text="${text//[-_*]/$reptext}"


res=""
for i in $text
do
  first_char="${i:0:1}"
  res="$res$first_char"
done

echo "${res^^}"
#echo ${res^^}