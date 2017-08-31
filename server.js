var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");



var app = express();
var PORT = process.env.PORT || 8080;

app.use(methodOverride("_method"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

var db = require("./models");


app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);
app.use("/delete", routes);






db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
