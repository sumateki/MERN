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
    
    //delete table from database
    var sql = "DROP TABLE customers "
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("Table deleted") 
    })

    //Drop Only if Exist
    // If the the table you want to delete is already deleted, or for any other reason does not exist, you can use the IF EXISTS keyword to avoid getting an error.
    //Delete the table "customers" if it exists
    var sql = "DROP TABLE IF EXISTS customers "
    con.query(sql, function(err, result){
        if(err) throw err
        console.log(result) 
    })




})