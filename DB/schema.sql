-- deleting database if it already exists
DROP DATABASE IF EXISTS fitbot_db;
-- creating new database for fitness app
CREATE DATABASE fitbot_db;
-- creating table called app_users using the fitbot_db database
USE fitbot_db;
CREATE TABLE App_users(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	user_name VARCHAR(50) NOT NULL,
	password VARCHAR(20) NOT NULL,
	city VARCHAR(50) NOT NULL,
	state VARCHAR(2) NOT NULL,
	zip_code INTEGER(5) NOT NULL,
	height VARCHAR(10) NOT NULL,
	-- height_inches INTEGER(2) NOT NULL,
	current_weight INTEGER(3) NOT NULL,
	PRIMARY KEY (id)
);

USE fitbot_db;
CREATE TABLE User_weights(
	week INTEGER(11) AUTO_INCREMENT NOT NULL,
	user_name VARCHAR(50) NOT NULL,
	current_weight INTEGER(3) NOT NULL,
	PRIMARY KEY (week)
);

USE fitbot_db;
CREATE TABLE User_calories(
	week INTEGER(11) AUTO_INCREMENT NOT NULL,
	user_name VARCHAR(50) NOT NULL,
	calories_burned INTEGER(3) NOT NULL,
	PRIMARY KEY (week)
);

USE fitbot_db;
CREATE TABLE Activity_mileages(
	week INTEGER(11) AUTO_INCREMENT NOT NULL,
	user_name VARCHAR(50) NOT NULL,
	total_mileage INTEGER(3) NOT NULL,
	PRIMARY KEY (week)
);
