-- deleting database if it already exists
DROP DATABASE IF EXISTS fitbot_db;
-- creating new database for fitness app
CREATE DATABASE fitbot_db;
-- creating table called app_users using the fitbot_db database
-- USE fitbot_db;
-- CREATE TABLE app_userInfo(
-- 	id INTEGER(11) AUTO_INCREMENT NOT NULL,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(50) NOT NULL,
-- 	user_name VARCHAR(50) NOT NULL,
-- 	city VARCHAR(50) NOT NULL,
-- 	state VARCHAR(2) NOT NULL,
-- 	zip_code INTEGER(5) NOT NULL,
-- 	height_feet INTEGER(2) NOT NULL,
-- 	height_inches INTEGER(2) NOT NULL,
-- 	current_weight INTEGER(3) NOT NULL,
-- 	PRIMARY KEY (id)
-- );

-- USE fitbot_db;
-- CREATE TABLE user_weight(
-- 	week INTEGER(11) AUTO_INCREMENT NOT NULL,
-- 	current_weight INTEGER(3) NOT NULL,
-- 	PRIMARY KEY (week)
-- );

-- USE fitbot_db;
-- CREATE TABLE user_caloriesBurned(
-- 	week INTEGER(11) AUTO_INCREMENT NOT NULL,
-- 	calories_burned INTEGER(3) NOT NULL,
-- 	PRIMARY KEY (week)
-- );

-- USE fitbot_db;
-- CREATE TABLE user_mileage(
-- 	week INTEGER(11) AUTO_INCREMENT NOT NULL,
-- 	calories_burned INTEGER(3) NOT NULL,
-- 	PRIMARY KEY (id)
-- );
