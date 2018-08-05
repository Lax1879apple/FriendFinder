var express = require("express");
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
