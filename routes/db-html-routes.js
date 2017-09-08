var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

<<<<<<< HEAD:routes/db-html-routes.js
  // index route loads index.html
  app.get("/metrics", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/Metrics.html"));
  });

  // metrics route loads metrics.html
  // app.get("/metrics", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../metrics.html"));
  // });
=======
  // // index route loads index.html
  // app.get("/index", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../index.html"));
  // });

  // metrics route loads metrics.html
  app.get("/metrics", function(req, res) {
    res.sendFile(path.join(__dirname, "../Metrics.html"));
  });
>>>>>>> b6f62c14524d3da425ef8db3fa37694d5896e0e1:db-routes/db-html-routes.js

};
