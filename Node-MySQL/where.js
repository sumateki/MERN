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
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38' ", function(err, result){
        if(err) throw err
        console.log(result)
    })


    //--------- Wildcard Characters -------------
    //  You can also select the records that starts, includes, or ends with a given letter or phrase.
    //Use the '%' wildcard to represent zero, one or multiple characters

    // Select records where the address starts with the letter 'S'
    con.query("SELECT * FROM customers WHERE address LIKE 'S%' ", function(err, result){
        if(err) throw err
        console.log(result)
    })

    //--------- Escaping Query Values ---------------
    // When query values are variables provided by the user, you should escape the values.
    // This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.
    // The MySQL module has methods to escape query values:

    //Escape query values by using the mysql.escape() method
    var adr = 'Mountain 21'
    var sql = 'SELECT * FROM customers WHERE address= '+ mysql.escape(adr)
    con.query(sql, function(err, result){
        if(err) throw err
        console.log(result)
    })


    // You can also use a ? as a placeholder for the values you want to escape.
    // In this case, the variable is sent as the second parameter in the query() method
    var adr = 'Mountain 21'
    var sql = 'SELECT * FROM customers WHERE address= ?'
    con.query(sql, [adr], function(err, result){
        if(err) throw err
        console.log(result)
    })

    
    //If you have multiple placeholders, the array contains multiple values, in that order
    var name = 'Amy'
    var adr = 'Mountain 21'
    var sql = 'SELECT * FROM customers WHERE name = ? OR address= ?'
    con.query(sql, [name, adr], function(err, result){
        if(err) throw err
        console.log(result)
    })

})