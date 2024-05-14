-- JOINS: CAN JOIN OTHER TABLE WITH CURRENT TABLE BY USING "FOREIGN KEY"
-- FOREIGN KEY: OTHER TBLE PRIMARY KEY USED IN CURR TABLE CALLED AS FOREIGN KEY

SELECT * FROM Company.Emp_info;

ALTER TABLE Company.Emp_info ADD City INT(3);

UPDATE Company.Emp_info SET City = 1 WHERE ID =1;
UPDATE Company.Emp_info SET City = 3 WHERE ID =4;
UPDATE Company.Emp_info SET City = 2 WHERE ID =5;
UPDATE Company.Emp_info SET City = 1 WHERE ID =6;

--  *********** CREATING CITY TABLE ***************
CREATE TABLE Company.City(
	City_ID INT(3) NOT NULL AUTO_INCREMENT,
    City_Name VARCHAR(20),
    PRIMARY KEY(City_ID)
);

INSERT INTO Company.City(City_ID,City_Name) 
	VALUES(1,'AGRA'),
    (2,'Bhopal'),
    (3,'Madhya Pradesh'),
    (4,'Oddisa');

SELECT * FROM Company.Emp_info;
SELECT * FROM company.city;

-- *********** INNER JOIN: Display matched val from both tables**********
ALTER TABLE Company.Emp_info ADD FOREIGN KEY(City) REFERENCES Company.City(City_ID);

SELECT * FROM Company.Emp_info INNER JOIN Company.City ON Emp_info.City=City.City_ID;


-- ADD NEW EMP INFO 
INSERT INTO Company.Emp_info values(7,"Vikas","Professor",30000,3);
INSERT INTO Company.Emp_info values(8,"Tom","Manager",90000,4);

SET FOREIGN_KEY_CHECKS = 0;
-- WRITING WITH FOREIGN_KEY_CHECKS =0 IT IS NOT ACCEPTED IT GIVES ERROR
INSERT INTO Company.Emp_info values(9,"abhi","Support",30000,5);
INSERT INTO Company.Emp_info values(10,"suma","Developer",45000,10);
INSERT INTO Company.Emp_info values(11,"sowji","testing", 60000,11);
-- INSERT INTO Company.Emp_info values(12,"Janu","Analyst",30000,7);

-- ****** LEFT OUTER JOIN: all data from table 1 and only matched data from table 2 *********
SELECT * FROM Company.Emp_info LEFT OUTER JOIN Company.City ON Emp_info.City = City.City_ID;


-- add new data to city table
INSERT INTO Company.City values(5,'Coimbatore'); 
INSERT INTO Company.City values(6,'Pune');
INSERT INTO Company.City values(7,'Delhi');
INSERT INTO Company.City values(8,'Gujarat');

-- *********** RIGHT OUTER JOIN: all records from table 2 and maatched records from table 1 ********
SELECT * FROM Company.Emp_info RIGHT JOIN Company.City ON Emp_info.City = City.City_ID;


-- ********** FULL OUTER JOIN: all records from both tables will be displayed(both matched and unmatched)***********
SELECT * FROM Company.Emp_info LEFT JOIN Company.City ON Emp_info.City = City.City_ID
UNION
SELECT * FROM Company.Emp_info RIGHT JOIN Company.City ON Emp_info.City = City.City_ID;


-- ******* CREATING VIEW for 1-tier only **********
CREATE VIEW Company.Emp_City_Join as 
SELECT * FROM Company.Emp_info LEFT JOIN Company.City ON Emp_info.City = City.City_ID
UNION
SELECT * FROM Company.Emp_info RIGHT JOIN Company.City ON Emp_info.City = City.City_ID;

-- only name and prf
CREATE VIEW Company.Profile_Data as
Select Emp_name, Emp_Profile from Company.Emp_info;



-- *********** STORED PROCEDURE -----------
delimiter $$

CREATE procedure Company.GetEmp(x_id INT)
begin
SELECT * FROM Company.Emp_info WHERE ID = x_id;
end $$

call company.GetEmp(7)








