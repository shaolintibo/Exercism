#!/usr/bin/env bash

resistor_colors=(black brown red orange yellow green blue violet grey white)  

res=''
countArgs=0
hasInvalidColor=0
unityValue=''

for color in "$@"
do
  #limit at 3 args
  if [[ $countArgs -lt 3 ]]; then
    found=0
    for((i=0;i<${#resistor_colors[@]};i++)); 
    do
      if [[ "${resistor_colors[$i]}" = "${color}" ]];
      then

          if [[ "$countArgs" -lt 2 ]]; then
            res="$res$i"
          else
            unityValue=$i
          fi
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

char='0'
result=$( printf "%${unityValue}s" ' ' )

numerZero=''
if [ $unityValue -gt 0 ]; then
  numerZero="${result// /$char}"
fi

res="$res$numerZero"

# shellcheck disable=SC2001
res=$(echo "$res" | sed 's/^0*//')

if [[ $res = "" ]]; then
  res="0"
fi

unity="ohms"
if [[ $res == *000000000 ]]; then
  res="${res:0:-9} giga$unity"
elif [[ $res == *000000 ]]; then
  res="${res:0:-6} mega$unity"
elif [[ $res == *000 ]]; then
  res="${res:0:-3} kilo$unity"
else
  res="$res $unity"
fi

echo "$res"

