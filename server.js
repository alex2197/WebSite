var mysql = require('mysql');
var http = require('http')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_db'
});

con.connect(function(err){
    if(err){
        throw err
    } 
    console.log("Connected!")
    var fullName = req.first_name;
    var lastName = req.last_name;
    var email = req.email;
    var sql = `INSERT INTO contact(first_name, last_name, email) VALUES (${fullName}, ${lastName}, ${email});`
    con.query(sql, function (err){
        if(err){
            throw err
        }
        console.log(fields);
    })
});