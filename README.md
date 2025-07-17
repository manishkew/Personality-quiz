## DATABASE SETUP

create database personality_quiz;

use personality_quiz;

CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT,
userId VARCHAR(255) NOT NULL UNIQUE,
result VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);
