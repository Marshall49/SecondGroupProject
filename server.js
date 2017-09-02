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


require('./db-routes/db-calories-burned-api-routes.js')(app);
require('./db-routes/db-new-user-api-routes.js')(app);
require('./db-routes/db-user-mileage-api-routes.js')(app);
require('./db-routes/db-user-weight-api-routes.js')(app);



// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);
// app.use("/delete", routes);






db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("sequelizedburger listening on PORT " + PORT);
  });
});
