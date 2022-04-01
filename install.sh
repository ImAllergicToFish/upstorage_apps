#!/bin/bash
sudo apt update

#install node with npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc
nvm install v13.6.0

#install project packets 
npm i 

#install pm2
npm install pm2 -g 

#run server on pm2
pm2 start npm --name "apps" -- start
pm2 list