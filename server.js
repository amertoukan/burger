var express = require ('express');
var bodyParser = require('body-parser');
var app = express(); 
var PORT = process.env.PORT || 8000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burger_controllers.js');

app.use('/',routes);
app.listen(PORT, function (err){
    if (err) throw err; 
    console.log ('http://localhost:'+PORT);
});