//Consider you have a "users" table and a "products" table
//These two tables can be combined by using users' favorite_product field and products' id field.
// Select records with a match in both tables:

const mysql = require('mysql2')

const con = mysql.createConnection({
    host: "localhost",
    user: "sumateki",
    password: "Suma@2002",
    database: "mydb"
})

con.connect(function(err){
    if(err) throw err
    console.log("Database Connected!!")

    // ------------ Inner Join ---------------
    //You can use INNER JOIN instead of JOIN. They will both give you the same result
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("Inner Join ",result)
    })

    //---------- Left Join -----------
    // If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:
    // Select all users and their favorite product
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("Left Join ",result)
    })


    //Right Join
    // If you want to return all products, and the users who have them as their favorite, even if no user have them as their favorite, use the RIGHT JOIN statement:
    // Select all products and the user who have them as their favorite
    //Hannah and Michael, who have no favorite product, are not included in the result
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("Right Join ",result)
    })


})



