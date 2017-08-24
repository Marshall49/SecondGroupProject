-- deleting database if it already exists
DROP DATABASE IF EXISTS fitness_app;
-- creating new database for fitness app
CREATE DATABASE fitness_app;
-- creating table called app_users using the fitness_app database
USE fitness_app;

CREATE TABLE app_users(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	state VARCHAR(2) NOT NULL,
	zip_code INTEGER(5) NOT NULL,
	height_feet INTEGER(2) NOT NULL,
	height_inches INTEGER(2) NOT NULL,
	current_weight INTEGER(3) NOT NULL,
	PRIMARY KEY (id)
);
