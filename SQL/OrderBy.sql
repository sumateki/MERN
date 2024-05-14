-- ASC, DESC WITH ORDER BY

-- display in descending order
SELECT * FROM World.Country ORDER BY Name DESC;

-- display in ascending order
SELECT * FROM World.Country ORDER BY Name ASC;

-- display in descending order with capital
SELECT * FROM World.Country ORDER BY Name,Capital DESC;

-- display in descending order  (Capital<100 DESC)
SELECT * FROM World.Country WHERE Capital<100 ORDER BY Capital DESC;

















