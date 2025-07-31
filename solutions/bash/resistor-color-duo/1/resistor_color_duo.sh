#!/usr/bin/env bash

resistor_colors=(black brown red orange yellow green blue violet grey white)  

res=''
countArgs=0
hasInvalidColor=0

for color in "$@"
do
  #limit at 2 args
  if [[ $countArgs -lt 2 ]]; then
    found=0
    for((i=0;i<${#resistor_colors[@]};i++)); 
    do
      if [[ "${resistor_colors[$i]}" = "${color}" ]];
      then
          res="$res$i"
          found=1
      fi
    done

    if [[ $found = 0 ]]; then
      hasInvalidColor=1
    fi
  fi
  ((countArgs+=1))
done


if [ "$res" = '' ] || [ $hasInvalidColor = 1 ];
then
    echo "invalid color"
    exit 1
fi

echo "${res##0}"