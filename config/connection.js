
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: process.env.user,
    password: process.env.password,
    database : 'burgers_db'
});

connection.connect (function(err){
    if (err){
        console.log('Error mySQL\n\n'+err);
    } else {
        console.log('Database is ready, feed it');
    }
});

module.exports = connection;