#!/usr/bin/env bash

PWD="$(pwd)"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
ROOT="$(dirname $DIR)"

bold=$(tput bold)
normal=$(tput sgr0)

read -p "${bold}Would you like to update submodules?${normal} [y/N]: " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
	. "$DIR/init_submodules.sh"
fi

# rise-node
rc_openapi_gen="$ROOT/libraries/rise-node/node_modules/rc-openapi-gen/cli.js"
cd $ROOT
$rc_openapi_gen -c rc-openapi-gen.conf.js

# rise-ts
cd $ROOT/libraries/rise-ts
npm run docs
cp -R docs $ROOT/assets/rise-ts

cd $PWD
