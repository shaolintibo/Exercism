#!/usr/bin/env bash

num=$1
length=${#num}
sum=0

for((i=0;i<length;i++)); do
  char="${num:i:1}"
  subsum=$((char ** length))
  ((sum+=subsum))
done

[[ "$sum" == "$num" ]] && echo "true" || echo "false"