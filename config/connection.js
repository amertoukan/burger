require ('dotenv').config();

var mysql = require('mysql');
var connection ;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection (process.env.JAWSDB_URL) 
} else {  ({
    host: 'localhost',
    port: 8889,
    user: process.env.user,
    password: process.env.password,
    database : 'burgers_db'
});
}

connection.connect (function(err){
    if (err){
        console.log('Error mySQL\n\n'+err);
    } else {
        //console.log('DB working');
        return;
    }
});

module.exports = connection;