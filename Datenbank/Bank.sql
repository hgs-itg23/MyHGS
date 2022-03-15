create database benutzer;
create table userdata (
  user_id int,
  email varchar(255),
  password varchar(255)
 );

--Beispiel
 insert into userdata (
     user_id,
     email,
     password
 ) values (
     1,
     'michaelmiemczyk@gmail.com',
     '1234'
 );


