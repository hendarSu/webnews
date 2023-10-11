# Membuat Webnews
## Prepare Development
Marikita mencoba mengembangkan aplikasi webnews, untuk memualai mengembangkan dan latihan membuat webapps ini, hal pertama yang perlu dilakukan adalah.
```
git clone https://github.com/hendarSu/webnews.git
```
setting konfigurasi db di folder config, untuk ORM kita menggunakna Sequelize, dan setelah database di konfigurasi selanjutnya install sequelize-cli di global library node kita dengan cara `npm i sequelize-cli -g`
setelah proses di atas di lakukan selanjutnya lakukan, create database menggunakan perintah
```
sequelize db:create
```
Lakukan migrasi table
```
sequelize db:migrate:all
```
dan untuk data seed, lakunan perintah
```
sequelize db:seed:all
```
Setelah di konfigrasi, selanjutnya jalankan perintah `npm install` setelah terinstall running aplikasinya dengan cara, 
```
npm run start:dev
```
Akses aplikasi di (http://localhost:3000)
## Lanjutkan Fitur Berikut
#### - [Menambahkan Feature Comments Berita](https://super-distance-36d.notion.site/Feature-comments-8776762293434340890104f90f8a8259?pvs=4)
#### - [Menambahkan Feature Registrasi dan Login](https://super-distance-36d.notion.site/Feature-Registration-Login-8a53d2520cb848b097122f4acbfc819d?pvs=4)
