create database Exercise2;
use Exercise2;

create table exercise2.departments(
department_id integer primary key,
department_name varchar(30),
location_id integer
);

create  table exercise2.employees(
employee_id integer,
first_name varchar(20),
last_name varchar(25),
email varchar(25),
phone_number varchar(20),
hire_date date,
job_id varchar(10),
salary integer,
commission_pct integer,
manager_id integer,
department_id integer,
constraint pk_emp primary key(employee_id),
constraint fk_deptno foreign key(department_id) references departments(department_id)
);


insert into exercise2.departments values(20, 'Marketing', 180);
insert into exercise2.departments values(30, 'Purchasing', 1700);
insert into exercise2.departments values(40, 'Human Resources', 2400);
insert into exercise2.departments values(50, 'Shipping', 1500);
insert into exercise2.departments values(60, 'IT', 1400);
insert into exercise2.departments values(70, 'Public Relations', 2700);
insert into exercise2.departments values(80, 'Sales', 2500);
insert into exercise2.departments values(90, 'Executive', 1700);
insert into exercise2.departments values(100, 'Finance', 1700);
insert into exercise2.departments values(110, 'Accounting', 1700);
insert into exercise2.departments values(120, 'Treasury', 1700);
insert into exercise2.departments values(130, 'Corporate Tax', 1700);
insert into exercise2.departments values(140, 'Control And Credit', 1700);
insert into exercise2.departments values(150, 'Shareholder Services', 1700);
insert into exercise2.departments values(160, 'Benefits', 1700);
insert into exercise2.departments values(170, 'Payroll', 1700);




insert into exercise2.employees values(100, 'Steven', 'King', "SKING", '515.123.4567', '1987-06-17', 'AD_PRES', 24000, NULL, NULL, 20);
insert into exercise2.employees values(101, 'Neena', 'Kochhar', "NKOCHHAR", '515.123.4569', '1989-11-21', 'AD_VP', 17000, NULL, 100, 20);
insert into exercise2.employees values(102, 'Lex', 'De Haan', "LDEHAAN", '515.123.4569', '1993-09-12', 'AD_VP', 17000, NULL, 100, 30);
insert into exercise2.employees values(103, 'Alexander', 'Hunold', "AHUNOLD", '590.423.4567', '1990-09-30', 'IT_PROG', 9000, NULL, 102, 60);
insert into exercise2.employees values(104, 'Bruce', 'Ernst', "BERNST", '590.423.4568', '1991-05-21', 'IT_PROG', 6000, NULL, 103, 60);
insert into exercise2.employees values(105, 'David', 'Austin', "DAUSTIN", '590.423.4569', '1997-06-25', 'IT_PROG', 4800, NULL, 103, 60);
insert into exercise2.employees values(106, 'Valli', 'Pataballa', "VPATABAL", '590.423.4560', '1988-02-05', 'IT_PROG', 4800, NULL, 103, 40);
insert into exercise2.employees values(107, 'Diana', 'Lorentz', "DLORENTZ", '590.423.5567', '1999-02-09', 'IT_PROG', 4200, NULL, 103, 40);
insert into exercise2.employees values(108, 'Nancy', 'Greenberg', "NGREENBE", '515.124.4569', '1994-08-17', 'FI_MGR', 12000, NULL, 101, 100);
insert into exercise2.employees values(109, 'Daniel', 'Faviet', "DFAVIET", '515.124.4169', '1994-08-12', 'FI_ACCOUNT', 9000, NULL, 108, 170);
insert into exercise2.employees values(110, 'John', 'Chen', "JCHEN", '515.124.4269', '1997-04-09', 'FI_ACCOUNT', 8200, NULL, 108, 170);
insert into exercise2.employees values(111, 'Ismael', 'Sciarr', "ISCIARRA", '515.124.4369', '1997-02-01', 'FI_ACCOUNT', 7700, NULL, 108, 160);
insert into exercise2.employees values(112, 'Jose Manuel', 'Urman', "JMURMAN", '515.124.4469', '1998-06-03', 'FI_ACCOUNT', 7800, NULL, 108, 150);
insert into exercise2.employees values(113,'Luis','Popp', 'LPOPP', '515.124.4567', '1999-12-07', 'FI_ACCOUNT', 6900, NULL, 108, 140);
INSERT INTO exercise2.employees values(114, 'Den', 'Raphaely', ' DRAPHEAL','515.127.4561', '1994-11-08', 'PU_MAN', 11000, NULL, 100,30);
INSERT INTO exercise2.employees VALUES(115, 'Alexander', 'Khoo', 'AKHOO', '515.127.4562','1995-05-12', 'PU_CLERK', 3100, NULL, 114, 80);
INSERT INTO exercise2.employees VALUES(116, 'Shell','Baida','SBAIDA', '515.127.4563', '1997-12-13','PU_CLERK', 2900, NULL, 114, 70);
INSERT INTO exercise2.employees VALUES(117, 'Sigal','Tobias', 'STOBIAS', '515.127.4564', '1997-09-10', 'PU_CLERK', 2800, NULL, 114, 30);
INSERT INTO exercise2.employees VALUES(118, 'Guy', 'Himuro', 'GHIMURO', '515.127.4565', '1998-01-02','PU_CLERK',2600,NULL,114,60);
INSERT INTO exercise2.employees VALUES(119, 'Karen', 'Colmenares', 'KCOLMENA', '515.127.4566', '1999-04-08', 'PU_CLERK', 2500, NULL, 114, 130);
INSERT INTO exercise2.employees VALUES(120, 'Mattew', 'Weiss', 'MWEISS', '650.123.1234', '1996-07-18', 'ST_MAN', 8000, NULL, 100,50);
INSERT INTO exercise2.employees VALUES(121, 'Adam', 'Fripp', 'AFRIPP', '650.123.2234', '1997-08-09', 'ST_MAN', 8200, NULL, 100, 50);
INSERT INTO exercise2.employees VALUES(122, 'Payam', 'Kaufling', 'PKAUFLIN', '650.123.3234', '1995-05-01', 'ST_MAN', 7900,  NULL, 100,40);
INSERT INTO exercise2.employees VALUES(123, 'Shanta', 'Vollman', 'SVOLLMAN', '650.123.4234', '1997-10-12', 'ST_MAN', 6500, NULL, 100,50);
INSERT INTO exercise2.employees VALUES(124, 'Kevin', 'Mourgos', 'KMOURGOS', '650.123.5234', '1999-11-12', 'ST_MAN', 5800, NULL, 100, 80);
INSERT INTO exercise2.employees VALUES(125, 'Julia', 'Nayer', 'JNAYER', '650.124.1214', '1997-07-02', 'ST_CLERK', 3200, NULL, 120, 50);
INSERT INTO exercise2.employees VALUES(126, 'Irene', 'Mikkilineni', 'IMIKKILI', '650.124.1224', '1998-11-12', 'ST_CLERK', 2700, NULL, 120, 50);
INSERT INTO exercise2.employees VALUES(127, 'James', 'Landry', 'JLANDRY', '650.124.1334', '1999-01-02', 'ST_CLERK', 2400, NULL, 120,90);
INSERT INTO exercise2.employees VALUES(128, 'Steven', 'Markle', 'SMARKLE', '650.124.1434', '2000-03-04', 'ST_CLERK', 2200, NULL, 120, 50);
INSERT INTO exercise2.employees VALUES(129,'Laura', 'Bissot', 'LBISSOT','650.124.5234', '1997-09-10', 'ST_CLERK', 3300,NULL, 121, 50);
INSERT INTO exercise2.employees VALUES(130, 'Mozhe', 'Atkinson', 'MATKINSO', '650.124.6234', '1997-10-12', 'ST_CLERK', 2800, NULL, 121, 110);



-- 1. Find the count of employees in each department

select count(employee_id) from employees;
select count(employee_id), department_id from employees group by department_id;


-- 2. Write a query to select employee with the highest salary

select max(salary) from employees;

-- 3. Write a query to divide people into three groups based on their salaries (Low, Mid & High)

SELECT
    *,
    CASE
        WHEN salary < 7000 THEN 'Low'
        WHEN salary >=7000 AND salary < 15000 THEN 'Mid'
        ELSE 'High'
    END AS salary_group
FROM employees;


-- 4. Find the employees who joined in August, 1994

SELECT * FROM employees WHERE EXTRACT(MONTH FROM hire_date) = 8
AND EXTRACT(YEAR FROM hire_date) = 1994;

-- 5. Write a SQL query to display the 5 least earning employees
select * from employees order by salary limit 5 ;















