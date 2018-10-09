#!/usr/bin/env bash

PWD="$(pwd)"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
ROOT="$(dirname $DIR)"

# pull all latest changes
cd $ROOT
git submodule update --recursive --remote

# rise-node
cd $ROOT/libraries/rise-node
npm install
npm run transpile

# rise-ts
cd $ROOT/libraries/rise-ts
npm install

# return to pwd
cd $PWD
