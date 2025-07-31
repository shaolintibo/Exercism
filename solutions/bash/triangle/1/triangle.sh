#!/usr/bin/env bash


triangle_type=$1
a=$2
b=$3
c=$4
# test if param > 0
if [[ $(echo "$a <= 0" | bc) -eq 1 ||
$(echo "$b <= 0" | bc) -eq 1 ||
$(echo "$c <= 0" | bc) -eq 1  ]]; then
  echo "false"
  exit
fi


if [[ $(echo "$a + $b < $c" | bc) -eq 1 ||
$(echo "$b + $c < $a" | bc) -eq 1 ||
$(echo "$a + $c < $b" | bc) -eq 1  ]]; then
  echo "false"
  exit
fi


# Function definition
isEquilateral() {
  local s1=$1
  local s2=$2
  local s3=$3

  if [[ "$(echo "$s1 == $s2" | bc)" -eq 1  &&  "$(echo "$s1 == $s3" | bc)" -eq 1 ]]; then
    echo 1
  else
    echo 0
  fi
}

# Function definition
isIsosceles() {
  local s1=$1
  local s2=$2
  local s3=$3
  if [[ "$(echo "$s1 == $s2" | bc)" -eq 1  ||
        "$(echo "$s1 == $s3" | bc)" -eq 1 ||
        "$(echo "$s2 == $s3" | bc)" -eq 1 ]]; then

    echo 1
  else
    echo 0
  fi
}


isScalene() {
  local s1=$1
  local s2=$2
  local s3=$3
  isIso=$(isIsosceles "$s1" "$s2" "$s3")
  isEqui=$(isEquilateral "$s1" "$s2" "$s3")

  if [[ isIso -eq 1 || isEqui -eq 1 ]]; then
    echo 0
  else
    echo 1
  fi
}

res=''
case $triangle_type in
  "equilateral")
    res=$(isEquilateral "$a" "$b" "$c")
    ;;
  "isosceles")
    res=$(isIsosceles "$a" "$b" "$c")
    ;;
  "scalene")
    res=$(isScalene "$a" "$b" "$c")
    ;;
  *)
    echo "The input triangle type is unknown."
    ;;
esac

if [[ res -eq 1 ]]; then
  echo "true"
else
  echo "false"
fi