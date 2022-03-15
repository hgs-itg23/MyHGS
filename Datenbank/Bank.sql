create database benutzer;
create table userdata (
  user_id int,
  first_name varchar(100),
  last_name varchar(100),
  email varchar(255)
 );

--Beispiel
 insert into userdata (
     user_id,
     first_name,
     last_name,
     email
 ) values (
     1,
     'Michael',
     'Miemczyk',
     'michaelmiemczyk@gmail.com'
 );


