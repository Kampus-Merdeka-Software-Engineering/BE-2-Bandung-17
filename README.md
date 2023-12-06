inisiasi project npm dengan menggunakan command npm init -y
update package.json
instal "npm install express mysql2 dotenv cors"
instal "npm i -D nodemon"
buat file .gitignore dan masukan fil .env, package-lock.json dan node_modules
import express, dotenv, dan package lainnya yang sudah di instal kedalam file index.js
integrasi projek dengan prisma agar terhubung dengan database
instal prisma "npm i -D prisma"
inisiasi prisma "prisma init"
npx prisma init --datasource-provider mysql
npx prisma migrate dev --name
DATABASES_URL : http://localhost:4000/Catalogs
DATABASES_URL : http://localhost:4000/product