var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

//   app.get("/api/users", function(req, res) {
//
//     db.User.findAll({
//       include: [db.Miles]
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });
//
//   app.get("/api/users/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.User.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Miles]
//     }).then(function(dbUser) {
//       res.json(dbUser);
//   });
// });

    app.post("/api/signup", function(req, res) {
      console.log(req.body);
      db.User.create({
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        res.redirect(307, "/api/login");
      }).catch(function(err) {
        res.json(err);
      });
    });

    app.get("/logout", function(req, res) {
      req.logout();
      res.redirect("/");
    });


    app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //   app.delete("/api/users/:id", function(req, res) {
  //     db.User.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
};
