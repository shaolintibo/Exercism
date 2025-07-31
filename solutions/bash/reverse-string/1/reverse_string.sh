#!/usr/bin/env bash
input=$1
reversed=$(echo "$input" | rev)
echo "$reversed"
