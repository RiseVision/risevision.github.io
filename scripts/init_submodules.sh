#!/usr/bin/env bash

DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd)"
PWD="$(pwd)"
ROOT="$(dirname $DIR)"

. "$DIR/fix_node_modules_resolution.sh"

# pull all latest changes
cd $ROOT
git submodule update --recursive --remote

# rise-node
cd $ROOT/libraries/rise-node
npm install
npm update --no-save rc-openapi-gen
npm run transpile
git stash

# rise-ts
cd $ROOT/libraries/rise-ts
npm install
git stash

cd $PWD
