var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the app users
  app.get("/", function(req, res) {
    db.App_userInfo.findAll({})
    .then(function(dbApp_userInfo) {
      res.json(dbApp_userInfo);
    });
  });

  // POST route for saving a new user
  app.post("/api/user", function(req, res) {
    console.log(req.body);
    db.App_userInfo.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,     
      user_name: req.body.user_name,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      height: req.body.height,
      current_weight: req.body.current_weight
    })
    .then(function(dbApp_userInfo) {
      res.json(dbApp_userInfo);
    });
  });

  // PUT route for updating user info
  app.put("/api/user", function(req, res) {
    db.App_userInfo.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbApp_userInfo) {
      res.json(dbApp_userInfo);
    });
  });

// DELETE route for deleting user info
  app.delete("/api/user/:id", function(req, res) {
    db.App_userInfo.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbApp_userInfo) {
      res.json(dbApp_userInfo);
    });
  });

}
