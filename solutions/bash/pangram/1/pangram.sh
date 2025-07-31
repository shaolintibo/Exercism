#!/usr/bin/env bash

#!/usr/bin/env bash
str=$1
#to lower
str="${str,,}"

filteredstr="${str//[^a-z]/}"

newTab=()
for (( i=0 ; i<${#filteredstr}; i++ )); do
    newTab+=("${filteredstr:$i:1}")
done 

readarray -t sorted < <(for a in "${newTab[@]}"; do echo "$a"; done | sort)

uniqueTab=()
uniqueTab+=("${sorted[0]}")

for (( i=0 ; i< ${#sorted[@]}; i++ )); do
  if [ "$i" -gt 0 ] && [ "${sorted[i-1]}" != "${sorted[i]}" ]; then
    uniqueTab+=("${sorted[i]}")
  fi
done

[[ "${#uniqueTab[@]}" == "26" ]] && echo "true" || echo "false"