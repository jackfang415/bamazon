DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE bamazon(
  
  id INT(11) AUTO_INCREMENT NOT NULL,
  product VARCHAR(100) NULL,
  department VARCHAR (100) NULL,
  price INT(11) NULL,
  quantity INT (11)

  PRIMARY KEY (id)
);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("Train To Busan Blu-Ray", "Movies", 10, 20);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("John Wick Blu-Ray", "Movies", 6, 10);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("Deadpool Blu-Ray", "Movies", 8, 15);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("Captain America: Civil War Blu-Ray","Movies", 5, 5);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("Settlers Of Catan", "Boardgames", 30, 10);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("Joking Hazard", "Boardgames", 20, 20);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("The Last Of Us", "Video Games", 10, 15);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("Dragonball Fighterz", "Video Games", 60, 10);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("Injustice 2", "Video Games", 40, 15);

INSERT INTO bamazon (product, department, price, quantity)
VALUES ("Monster Hunter: World", "Video Games", 60, 15);

