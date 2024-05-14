-- CREATING DATABASE --
create database Demo;

-- CREATING Table --
CREATE TABLE Students(
Roll_no INT(3) NOT NULL AUTO_INCREMENT,
FirstName VARCHAR(20),
LastName VARCHAR(20),
Age INT(2),
Email VARCHAR(30),
Dob DATE,
Address VARCHAR(100),
State_Code CHAR(2),
Contact CHAR(10),
PRIMARY KEY(Roll_no)
);

-- READ QUERY
SELECT * FROM students;
SELECT Roll_no,FirstName from students;


-- INSERTING DATA 
INSERT INTO students VALUES(1,'Suma', 'Teki', 21, 'suma@gmail.com','2002-02-14','Andaluru','AP',7095497479);

INSERT INTO students VALUES(2,'Janu', 'Velagala', 21, 'janu@gmail.com','2002-08-16','Marteru','AP',9977765987);

INSERT INTO students VALUES(3,'Pooja', 'Bunga', 22, 'pooja@gmail.com','2001-07-12','Narsapuram','AP',8396964567);

INSERT INTO students VALUES(4,'Lucky', 'Grandhi', 21, 'lucky@gmail.com','2002-10-14','Narspuram','AP',8877559034);

-- no need to write rollno.. because as it was already primary key and autoincremented, so we just kepp it empty it'll automatically take it
INSERT INTO students(FirstName, LastName, Age, Email, Dob, Address, State_Code, COntact)
 VALUES('Sowji', 'Panchakarla', 21, 'sowji@gmail.com','2002-07-26','TadepalliGudem','AP',7856904321);



