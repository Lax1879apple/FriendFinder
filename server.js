/*var express = require("express");
var bodyParser = require("body-parser");


//we are creating an "express" server
var app = express();

// Setting up an initial port to use later in listener
var PORT = process.env.PORT || 8080;

// Setting up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
*/
//---------------------------------------
// required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3030;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});
