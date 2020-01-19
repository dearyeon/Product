show databases;
use kj_product;
show tables;

create table product_list (
	id integer not null auto_increment primary key,
    site_code integer not null,
    title varchar(100) not null,
    price integer not null,
    thumnail varchar(200)
);

select * from product_list;