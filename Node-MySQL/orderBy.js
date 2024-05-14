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

    //Sort the result alphabetically by name
    con.query("SELECT * FROM customers ORDER BY name ", function(err, result){
        if(err) throw err
        console.log(result)
    })

    //------- ORDER BY DESC -----------
    // Use the DESC keyword to sort the result in a descending order
    
    //Sort the result reverse alphabetically by name
    con.query("SELECT * FROM customers ORDER BY name DESC", function(err, result){
        if(err) throw err
        console.log(result)
    })
})

