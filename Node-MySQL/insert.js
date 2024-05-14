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

    //----------------- CUSTOMERS ----------------
    //insert documents into database
    var sql = "INSERT INTO customers(name, address) VALUES ('Company Inc', 'Highway 37')"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("1 record inserted!!")
    })

    //for multiiple values
    var sql = "INSERT INTO customers(name, address) VALUES ?"
    var values= [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ]

    con.query(sql, [values], function(err, result){
        if(err) throw err
        console.log("No.of recocrdss inserted: ", result.affectedRows)
    })

    //Insert a record in the "customers" table, and return the ID
    //To be able to get the inserted id, only one row can be inserted
    var sql = "INSERT INTO customers(name, address) VALUES ('Michelle', 'Blue Village 1')"
    con.query(sql, function(err, result){
        if(err) throw err
        console.log("1 record inserted, ID: "+ result.insertId)
    })



    // ---------- USERS --------------
    var sql = "INSERT INTO users(id, name, favorite_product) VALUES ?"
    var values= [
        [1,'John', 154],
        [2,'Peter', 154],
        [3,'Amy', 155],
        [4,'Hannah',null],
        [5,'Michael',null]
    ]
    con.query(sql, [values], function(err, result){
        if(err) throw err
        console.log("No.of recocrdss inserted: ", result.affectedRows)
    })

    // ---------- PRODUCTS --------------
    var sql = "INSERT INTO products(id, name) VALUES ?"
    var values= [
        [154, 'Chocolate Heaven'],
        [155, 'Tasty Lemons'],
        [156, 'Vanilla Dreams']
    ]
    con.query(sql, [values], function(err, result){
        if(err) throw err
        console.log("No.of recocrdss inserted: ", result.affectedRows)
    })



})