//Select all records from the "customers" table, and display the result object
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
    con.query("SELECT * FROM customers", function(err, result){
        if(err) throw err
        console.log(result)
    })

    //Select name and address from the "customers" table, and display the return object
    con.query("SELECT name, address FROM customers", function(err, result){
        if(err) throw err
        console.log(result)
        // Return the address of the third record:
        // console.log(result[2].address);
    })

    // The Fields Object
    // The third parameter of the callback function is an array containing information about each field in the result.
    // Select all records from the "customers" table, and display the fields object
    con.query("SELECT name, address FROM customers", function(err, result, fields){
        if(err) throw err
        console.log(fields)
    })



})
