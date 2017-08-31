var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // index route loads index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // metrics route loads metrics.html
  app.get("/metrics", function(req, res) {
    res.sendFile(path.join(__dirname, "../metrics.html"));
  });

};