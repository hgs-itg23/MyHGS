create database benutzer;
create table userdata (
  user_id int,
  email varchar(255),
  password varchar(255)
 );
--CREATE TABLE NotenUser1(
   -- Mathe int(2),
   -- Spanisch int (2),
   -- Englisch int (2),
   -- Physik int (2),
   -- Deutsch int(2),
   -- Wirtschaftslehre int(2),
   -- Projektfach int(2),
   -- GeschichteGemeinschaftskunde int(2),
   -- PhysikLabor int(2),
   -- Ethik int(2),
   -- InformatikTheorie int(2),
   -- InformatikPraxis int(2),
   -- TechnischeInformatik int(2),
   -- Computertechnik int(2),
   -- Sport int(2),
   -- Chemie int(2),
   -- Religion int(2),
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


