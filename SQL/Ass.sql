CREATE DATABASE Assignment;
USE Assignment;

CREATE TABLE EmployeeDetails (
    EmpId INT PRIMARY KEY,
    FullName VARCHAR(30),
    ManagerId INT,
    DateOfJoining DATE,
    City VARCHAR(20)
    -- FOREIGN KEY (ManagerId) REFERENCES EmployeeDetails(EmpId)
);

CREATE TABLE EmployeeSalary (
    EmpId INT,
    Project VARCHAR(30),
    Salary INT,
    Variable INT,
    PRIMARY KEY (EmpId, Project),
    FOREIGN KEY (EmpId) REFERENCES EmployeeDetails(EmpId) 
);

INSERT INTO EmployeeDetails (EmpId, FullName, ManagerId, DateOfJoining, City)
VALUES
    (1001, 'Sai Suma Sri Teki', 1421, '2022-01-31', 'Hyderabad'),
    (1002, 'Sowjanya Panchakarla', 1225, '2021-04-15', 'Bengaluru'),
    (1003, 'Jahnavi Velagala', 1335, '2020-06-05', 'Rajahmundry'),
    (1004, 'Bhargavi Grandhi', 1342, '2020-06-05', 'Rajahmundry'),
    (1005, 'Nagendra Thatvarthi', 1006, '2021-09-10', 'Hyderabad'),
    (1006, 'Pooja Bunga', 1919, '2022-11-20', 'Pune'),
    (1007, 'Bindu Tammana', 1671, '2020-11-10', 'Coimbatore'),
    (1008, 'Vikas Gurrapu', 1001, '2021-07-12', 'Mumbai'),
    (1009, 'Sai Teja Lingam', 1123, '2023-05-01', 'Pune'),
    (1010, 'Siva Kishore B', 1322, '2023-08-01', 'Chennai');

INSERT INTO EmployeeSalary (EmpId, Project, Salary, Variable)
VALUES
    (1002, 'Fingerprint voting system', 55000, 5000),
    (1010, 'Local train ticketing system', 45000, 4000),
    (1004, 'Weather forecasting', 60000, 4500),
    (1005, 'AI shopping system', 75000, 5800),
    (1001, 'Android task monitoring', 67000, 8800),
    (1006, 'Election analysis', 43000, 6000),
    (1009, 'Healthcare management', 62000, 6000);
    
    
    
-- SQL Query to fetch records that are present in one table but not in another table.
SELECT ed.*
FROM EmployeeDetails ed
LEFT JOIN EmployeeSalary es ON ed.EmpId = es.EmpId
WHERE es.EmpId IS NULL;


-- SQL query to fetch all the employees who are not working on any project.
SELECT ed.*
FROM EmployeeDetails ed
LEFT JOIN EmployeeSalary es ON ed.EmpId = es.EmpId
WHERE es.EmpId IS NULL;


-- SQL query to fetch all the Employees from EmployeeDetails who joined in the Year 2020.
SELECT *
FROM EmployeeDetails
WHERE YEAR(DateOfJoining) = 2020;

-- Fetch all employees from EmployeeDetails who have a salary record in EmployeeSalary.
SELECT ed.*
FROM EmployeeDetails ed
INNER JOIN EmployeeSalary es ON ed.EmpId = es.EmpId;

-- Write an SQL query to fetch a project-wise count of employees.
SELECT Project, COUNT(*) AS EmployeeCount
FROM EmployeeSalary
GROUP BY Project;

-- Fetch employee names and salaries even if the salary value is not present for the employee.
SELECT ed.FullName, COALESCE(es.Salary, 'Salary not available') AS Salary
FROM EmployeeDetails ed
LEFT JOIN EmployeeSalary es ON ed.EmpId = es.EmpId;

-- Write an SQL query to fetch all the Employees who are also managers.
SELECT e.*
FROM EmployeeDetails e
JOIN EmployeeDetails m ON e.EmpId = m.ManagerId;

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



