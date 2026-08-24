#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M main
git remote add origin https://github.com/yourusername/seachildoz.git
git push -u origin main

cd -
