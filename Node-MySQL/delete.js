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
    
    //delete documents from database
    var sql = "DELETE FROM customers WHERE address = 'Blue Village 1' "
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("No.of recocrds deleted: ", result.affectedRows)
        console.log(result.affectedRows) //Return the number of affected rows
    })
})