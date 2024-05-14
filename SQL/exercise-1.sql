CREATE DATABASE Exercise1;
use Exercise1;

CREATE TABLE Std_info(
	id int(3) not null auto_increment,
    name varchar(30),
    department varchar(30),
    age int(2),
    primary key(id)
);

create table Department(
dept_id int(3) not null auto_increment,
dept_name varchar(30),
dept_block varchar(30),
primary key(dept_id)
);

insert into std_info(id, name, department, age) values
(1, "Maria Gloria", "CS", 22),
(2, "John Smith", "IT", 23),
(3, "Gal Rao", 'CS', 22),
(4, "Jakey Smith", "EC", 24),
(5,"Rama Saho", "IT", 22),
(6, "Maria Gaga", "EC", 23);

insert into department(dept_id, dept_name, dept_block) values
(1, "Computer Science", "B-Block"),
(2, "Information Technology", "C-Block"),
(3, "Mechanical", "A-Block"),
(4, "Electrical Communicaation", "D-Block");

select * from std_info;
select * from department;

-- write a mysql statement to select data of only CS and IT departments.
select * from std_info where department = 'CS' or department ='IT';

-- write a mysql statement to select data of all departments in descending order by age
select department from std_info order by age desc;

-- write a mysql statement to retrive name beginning  with 'm'
select name from std_info where name like 'M%';

-- write a mysql statement to find the name, birth, department name, department block from the given tables
select * from std_info left join department on std_info.department = department.dept_name
union
select * from std_info right join department on std_info.department = department.dept_name;




-- write a mysql statement to print all the data from both tables with stored procedures & joiin
delimiter $$
create procedure Get_Std_Emp()
begin
select * from std_info left join department on std_info.id = department.dept_id
union
select * from std_info right join department on std_info.id = department.dept_id;
end $$

 
 
















