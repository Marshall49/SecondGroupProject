var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require("./config/passport");
var session = require("express-session");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
// require("./routes/milesran-api-routes.js")(app);

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "justrunit_db"
  });
};

var connection;

connection.connect();
module.exports = connection;


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Just Run it listening on PORT " + PORT);
  });
});
