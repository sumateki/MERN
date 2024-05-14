CREATE DATABASE Practice;
use Practice;
CREATE TABLE Std_Details(
	Name VARCHAR(30),
    Age INT(2),
    Email VARCHAR(30),
    Place VARCHAR(30),
    Phone CHAR(10)
);

SELECT * FROM Std_Details;

INSERT INTO Std_Details values('Suma Teki', 21, 'sumateki@gmail.com', 'Andaluru', 7095497479);
INSERT INTO Std_Details values('Pooja Bunga', 22, 'poojabunga@gmail.com', 'Narsapur', 9388123234);
INSERT INTO Std_Details values('Jahnavi Velagala', 21, 'janureddy@gmail.com', 'Marteru',9677767980);
INSERT INTO Std_Details values('Bharghavi Grandhi', 21, 'luckybhagi@gmail.com', 'Narsapur',8899543890);

CREATE TABLE Employee(
Emp_ID INT(6),
Emp_Name VARCHAR(20),
Emp_Profile varchar(30),
Emp_Salary varchar(10),
Emp_Email varchar(30),
Emp_Contact char(10),
PRIMARY KEY(Emp_ID)

);

SELECT * FROM Employee;

INSERT INTO Employee values(10010, 'Suma Teki', 'Software Developer',50000, 'suma@gmail.com', 7095497479);
INSERT INTO Employee values(10011, 'Jahnavi Velagala', 'Business Analyst',40000, 'janu@gmail.com', 9677767543);
INSERT INTO Employee values(10012, 'Bhargavi Grandhi', 'Business Analyst',40000, 'lucky@gmail.com', 8383456789);
INSERT INTO Employee values(10013, 'Pooja Bunga', 'Software Developer',35000, 'Pooja@gmail.com', 8356568970);
INSERT INTO Employee values(10014, 'Sowjanya Panchakarla', 'Testing', 70000,'sowji@gmail.com', 8709706565);
INSERT INTO Employee values(10015, 'ChomuDurga Kodavati', 'Software Developer',60000, 'chomu@gmail.com', 6302565671);

SELECT MAX(Emp_Salary) FROM Employee;
SELECT MIN(Emp_Salary) FROM Employee;
SELECT AVG(Emp_Salary) FROM Employee;
SELECT SUM(Emp_Salary) FROM Employee;
SELECT COUNT(Emp_Salary) FROM Employee;







