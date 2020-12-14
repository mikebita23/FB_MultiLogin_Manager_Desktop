CREATE DATABASE IF NOT EXISTS fb_multilogin_manager;
USE users;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	email varchar(50),
	username varchar(20),
	fullname varchar(20),
	password varchar(128),
	PRIMARY KEY (id)
);