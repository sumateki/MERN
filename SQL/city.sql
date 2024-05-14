SELECT * FROM World.City;

SELECT District,Population FROM World.City;

SELECT * FROM World.City WHERE ID<=10;

SELECT * FROM World.City WHERE District = "Maharashtra";

SELECT * FROM World.City WHERE ID>5 AND ID<10;

SELECT * FROM World.City WHERE ID = 1024 AND District = "Maharashtra";

SELECT * FROM World.City WHERE (ID>=5 AND ID<=10) OR (ID>=15 AND ID<=20);

SELECT * FROM World.Country;
SELECT * FROM World.Country WHERE Code = 'IND';


