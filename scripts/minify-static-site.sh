#!/usr/bin/env bash

PWD="$(pwd)"
DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd)"
ROOT="$(dirname $DIR)"

INPUT=$1
OUTPUT=$2

# find assets/rise-ts  -name "*.css"

rm -rf $OUTPUT
mkdir -p $OUTPUT

echo $1
echo $2
