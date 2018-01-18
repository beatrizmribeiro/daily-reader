// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setting up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Enabling Express app to parse data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sets up server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});