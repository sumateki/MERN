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

    //Overwrite the address column from "Valley 345" to "Canyon 123"
    var sql= "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345' "
    con.query(sql, function(err, result){
        if(err) throw err
        console.log(result.affectedRows+ "record(s) updated")
    })
})