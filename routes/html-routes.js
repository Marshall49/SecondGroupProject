var path = require("path");

// Routes
// =============================================================
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {

    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", function(req, res) {

    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/Metrics.html"));
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/Metrics.html"));
  });

};
