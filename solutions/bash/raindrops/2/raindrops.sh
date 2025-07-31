#!/usr/bin/env bash

sound=("Pling" "Plang" "Plong")
res=""
counter=0

for div in 3 5 7; do
    if [ `expr $1 % $div` -eq 0 ]; then
       res=($res${sound[$counter]})
       
    fi
    ((counter+=1))
done

if [ -z $res ]; then res=$1; fi

echo $res
