#!/usr/bin/env bash

INPUT=$1

PWD="$(pwd)"
DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd)"
ROOT="$(dirname $DIR)"

open_sem(){
    mkfifo pipe-$$
    exec 3<>pipe-$$
    rm pipe-$$
    local i=$1
    for((;i>0;i--)); do
        printf %s 000 >&3
    done
}

run_with_lock(){
    local x
    read -u 3 -n 3 x && ((0==x)) || exit $x
    (
    "$@"
    printf '%.3d' $? >&3
    )&
}

minifycss () {
    file=$1
    tmp="$1.tmp"
    mv $file $tmp
    npx uglifycss $tmp --output $file
    if [ $? -eq 0 ]; then
        rm $tmp
        echo "Optimized $file"
    else
        mv $tmp $file
        echo "Failed to optimize $file"
    fi
}

minifyjs() {
    file=$1
    tmp="$1.tmp"
    mv $file $tmp
    npx uglifyjs $tmp --output $file
    if [ $? -eq 0 ]; then
        rm $tmp
        echo "Optimized $file"
    else
        mv $tmp $file
        echo "Failed to optimize $file"
    fi
}

minifyhtml() {
    script="$BIN/html-minifier"
    file=$1
    tmp="$1.tmp"
    mv $file $tmp
    npx html-minifier  \
        --collapse-whitespace \
        --conservative-collapse \
        --minify-css \
        --minify-js \
        --minify-urls \
        --remove-comments \
        --remove-redundant-attributes \
        --remove-tag-whitespace \
        --collapse-inline-tag-whitespace \
        $tmp --output $file
    if [ $? -eq 0 ]; then
        rm $tmp
        echo "Optimized $file"
    else
        mv $tmp $file
        echo "Failed to optimize $file"
    fi
}

cd $ROOT

echo "Optimizing $1 (may take a while)..."

N=4
open_sem $N

for file in $(find $1 -name "*.css"); do
    run_with_lock minifycss $file
done

for file in $(find $1 -name "*.js"); do
    run_with_lock minifyjs $file
done

for file in $(find $1 -name "*.html"); do
    run_with_lock minifyhtml $file
done

wait
echo "Optimized!"

cd $PWD
