var db = require("../models");

module.exports = function(app) {


  // GET route for getting all of the user weights
  app.get("/", function(req, res) {
    db.User_weight.findAll({})
    .then(function(dbUser_weight) {
      res.json(dbUser_weight);
    });
  });

   // POST route for saving user weights
  app.post("/api/user-weight", function(req, res) {
    console.log(req.body);
    db.User_weight.create({
      user_name: req.body.user_name,
      user_weight: req.body.user_weight     
    })
    .then(function(dbUser_weight) {
      res.json(dbUser_weight);
    });
  });

  // PUT route for updating user weights
  app.put("/api/user-weight", function(req, res) {
    db.User_weight.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbUser_weight) {
      res.json(dbUser_weight);
    });
  });

  // DELETE route for deleting user weights
  app.delete("/api/user-weight/:id", function(req, res) {
    db.User_weight.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser_weight) {
      res.json(User_weight);
    });
  });
}