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
    //create table
    var sql = "CREATE TABLE customers (name VARCHAR(100), address VARCHAR(200))"

    //if u want to add any columns use ALTER 
    // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("Table created!!")
        // console.log("Table Altered!!")
    })

    //---- USERS TABLE ------
    var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), favorite_product INT(5))"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("Table created!!")
    })


    //---- PRODUCTS TABLE ------
    var sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100))"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("Table created!!")
    })
})