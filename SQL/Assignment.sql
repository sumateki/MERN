create database Assignment;
use Assignment;

create table EmployeeDetails(
EmpId int primary key,
FullName varchar(30),
ManagerId int,
DateOfJoining date,
City varchar(20)

);

create table EmployeeSalary(
EmpId int primary key,
Project varchar(30),
Salary int,
Variable int
);

insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1001, 'Sai Suma Sri Teki', 1421, '2022-01-31', 'Hyderabad');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1002, 'Sowjanya Panchakarla', 1225, '2021-04-15', 'Bengaluru');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1003, 'Jahnavi Velagala', 1335, '2020-06-05', 'Rajahmundary');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1004, 'Bhargavi Grandhi', 1342, '2020-06-05', 'Rajahmundary');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1005, 'Nagendra Thatvarthi', 1172, '2021-09-10', 'Hyderabad');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1006, 'Pooja Bunga', 1919, '2022-11-20', 'Pune');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1007, 'Bindu Tammana', 1671, '2020-11-10', 'Coimbatore');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1008, 'Vikas Gurrapu', 1001, '2021-07-12', 'Mumbai');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1009, 'Sai Teja Lingam', 1123, '2023-05-01', 'Pune');
insert into EmployeeDetails(EmpId, FullName, ManagerId, DateOfJoining, City)
 values(1010, 'Siva Kishore B', 1322, '2023-08-01', 'Chennai');

insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1002, "Fingerprint voting system", 55000, 5000);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1010, "Local train ticketing system", 45000, 4000);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1004, "Weather forecasting", 60000, 4500);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1005, "AI shopping system", 75000, 5800);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1012, "e-Learning platform", 68000, 7900);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1112, "Bug tracker", 50000, 2000);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1082, "Android patient Tracker", 48000, 3000);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1001, "Android task monitoring", 67000, 8800);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1006, "Election analysis", 43000, 6000);
insert into EmployeeSalary(EmpId, Project, Salary, Variable) values(1019, "Healthcare management", 62000, 6000);


-- SQL Query to fetch records that are present in one table but not in another table.
select employeedetails.* from assignment.employeedetails left join assignment.employeesalary on employeedetails.EmpId = employeesalary.EmpId 
where employeesalary.empid is null;

-- SQL query to fetch all the employees who are not working on any project.
select employeedetails.* from assignment.employeedetails left join assignment.employeesalary on employeedetails.EmpId = employeesalary.empid
where employeesalary.empid is null;

-- SQL query to fetch all the Employees from EmployeeDetails who joined in the Year 2020.
select * from assignment.employeedetails where extract(year from DateOfJoining) = 2020;
select * from assignment.employeedetails where year(DateOfJoining) = 2020;

-- Fetch all employees from EmployeeDetails who have a salary record in EmployeeSalary.
select employeedetails.* from assignment.employeedetails inner join assignment.employeesalary on employeedetails.EmpId = employeesalary.empid;

-- Write an SQL query to fetch a project-wise count of employees.
select count(EmpId),project from employeesalary group by project;

-- Fetch employee names and salaries even if the salary value is not present for the employee.
select employeedetails.fullname, coalesce(employeesalary.salary ,'Salary not available') as salary
from employeedetails left join employeesalary on employeedetails.EmpId = employeesalary.empid;

-- Write an SQL query to fetch all the Employees who are also managers.
WITH NumberedRows AS (
    SELECT *, ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS RowNum
    FROM EmployeeDetails
)

SELECT *
FROM NumberedRows
WHERE RowNum % 2 <> 0;
-- Write an SQL query to fetch duplicate records from EmployeeDetails.
SELECT EmpId, FullName, COUNT(*)
FROM EmployeeDetails
GROUP BY EmpId, FullName
HAVING COUNT(*) > 1;


-- Write an SQL query to fetch only odd rows from the table.
WITH NumberedRows AS (
    SELECT *, ROW_NUMBER() OVER (ORDER BY (SELECT NULL)) AS RowNum
    FROM EmployeeDetails
)

SELECT *
FROM NumberedRows
WHERE RowNum % 2 <> 0;


-- Write a query to find the 3rd highest salary from a table without top or limit keyword.
SELECT MAX(Salary) AS ThirdHighestSalary
FROM EmployeeSalary
WHERE Salary < (
    SELECT MAX(Salary)
    FROM EmployeeSalary
)
AND Salary NOT IN (
    SELECT MAX(Salary)
    FROM EmployeeSalary
);


-- find the mployees who joined the cmp aftr 15th of month
-- yy-mm-dd

select empid, dateofjoining from employeedetails where day(dateofjoining) > 15;

=
-- find sal range of emp
select min(salary) min_sal, max(salary) max_sal from employeesalary;