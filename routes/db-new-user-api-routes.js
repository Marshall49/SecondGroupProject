var db = require("../models");
var App_Users = require("../models/app-users.js");

module.exports = function(app) {

  // GET route for getting all of the app users
  app.get("/", function(req, res) {
    db.App_users.findAll({})
    .then(function(App_users) {
      res.json(App_users);
    });
  });

  // POST route for saving a new user
  app.post("/api/user", function(req, res) {
    console.log(req.body);
    db.App_users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      height: req.body.height,
      weight: req.body.weight
    })
    .then(function(App_users) {
      res.json(App_users);
    });
  });

  app.get("/metrics", function(req, res) {
// console.log("/n/n//n/n/n" + req.params.id)

      db.App_users.findAll()


    .then(function(App_users) {
      res.json(App_users);
    });
    




      })

    //   db.App_users.findOne({
    //     where: {
    //       id: req.params.id
    //     }
    //   }).then(function(App_users) {
    //     return res.json(App_users);
    //   });
    // });




  // PUT route for updating user info
  app.put("/api/user", function(req, res) {
    db.App_users.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(App_users) {
      res.json(App_users);
    });
  });

// DELETE route for deleting user info
  app.delete("/api/user/:id", function(req, res) {
    db.App_users.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(App_users) {
      res.json(App_users);
    });
  });

}
