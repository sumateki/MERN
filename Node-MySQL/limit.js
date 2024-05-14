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

    //Select the 5 first records in the "customers" table
    var sql= "SELECT * FROM customers LIMIT 5"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log(result)
    })

    //Start From Another Position
    // If you want to return five records, starting from the third record, you can use the "OFFSET" keyword
    // "OFFSET 2", means starting from the third position, not the second!
    var sql= "SELECT * FROM customers LIMIT 5 OFFSET 2"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log(result)
    })

    //Shorter Syntax
    // You can also write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example above
    //Start from position 3, and return the next 5 records
    // The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"
    var sql= "SELECT * FROM customers LIMIT 2, 5"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log(result)
    })


})