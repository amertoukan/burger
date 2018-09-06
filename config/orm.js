var connection = require('./connection.js');


// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();

  }

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
     
            arr.push(key + "=" + ob[key]);
        }
    }

      return arr.toString();
    }
  

var orm = {

all: function (table, callback) {
    
    var queryString = 'SELECT * FROM ' + table +';';
    
    connection.query(queryString, function (err, data) {

        if (err) {

        throw err;

        }
   
        callback(data);
   });
},

   

create : function(table, cols, vals, callback){
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    
    
    connection.query(queryString, vals, function (err, data){
        
        if (err) {
            throw err;
        }
    callback(data);
});
},




update: function(table, objColVals, condition, callback){
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
         if (err) {
        throw err;
        }
    callback(result);
});
},

delete: function(table, condition, callback) {
    var queryString = "DELETE FROM "+table
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ;

    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        callback(result);
    });
}
};



// Export the orm object for the model (cat.js).
module.exports = orm;