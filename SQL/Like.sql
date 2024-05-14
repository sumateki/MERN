-- LIKE
SELECT * FROM World.Country;

-- select all the country name starts with 'I'
SELECT * FROM World.Country WHERE Name LIKE 'I%';

-- select all the country name ends with 'I'
SELECT * FROM World.Country WHERE Name LIKE '%I';

-- select all the country name starts with 'Au'
SELECT * FROM World.Country WHERE Name LIKE 'Au%';

-- select all the country name starts ends with 'land'
SELECT * FROM World.Country WHERE Name LIKE '%land';

-- select all the country name, the scnd char is 'a'
SELECT * FROM World.Country WHERE Name LIKE '_a%';

-- select all the country name, the scndlast char is 'a'
SELECT * FROM World.Country WHERE Name LIKE '%a_';

-- select all the country name the third char is 'a'
SELECT * FROM World.Country WHERE Name LIKE '__a%';

-- select all the country name with 3 and 4 char is 'di'
SELECT * FROM World.Country WHERE Name LIKE '__di%';
