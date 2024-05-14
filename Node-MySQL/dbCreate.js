const mysql = require('mysql2')

const con = mysql.createConnection({
    host: "localhost",
    user: "sumateki",
    password: "Suma@2002"
})

con.connect(function(err){
    if(err) throw err
    console.log("Database Connected!!")
    //create database
    con.query("CREATE DATABASE mydb", function(err, result){
        if(err) throw err
        console.log("Database created!!")
    })
})