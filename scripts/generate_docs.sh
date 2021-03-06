#!/usr/bin/env bash

PWD="$(pwd)"
DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd)"
ROOT="$(dirname $DIR)"

bold=$(tput bold)
normal=$(tput sgr0)

. "$DIR/fix_node_modules_resolution.sh"

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

cd $ROOT/libraries/rise-node
git stash

# rise-ts
dest=$ROOT/assets/rise-ts
rm -rf $dest
cd $ROOT/libraries/rise-ts
npm run docs
cp -R docs $dest
git stash
$DIR/minify-static-site.sh $dest

cd $PWD
