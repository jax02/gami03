#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jax02/gami03.git master:gh-pages

cd -

#傳檔案上github
#git init
#git remote add origin https://github.com/jax02/gami03.git
#git add .
#git commit -m "Initial commit" 
#上方"Initial commit" 內容自訂
#git push -u origin master