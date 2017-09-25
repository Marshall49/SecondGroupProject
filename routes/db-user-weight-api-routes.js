var db = require("../models");

module.exports = function(app) {


  // GET route for getting all of the user weights
  app.get("/", function(req, res) {
    db.User_weights.findAll({})
    .then(function(User_weights) {
      res.json(User_weights);
    });
  });

   // POST route for saving user weights
  app.post("/api/user-weight", function(req, res) {
    console.log(req.body);
    db.User_weights.create({
      user_weight: req.body.user_weight
    })
    .then(function(User_weights) {
      res.json(User_weights);
    });
  });

  // PUT route for updating user weights
  app.put("/api/user-weight", function(req, res) {
    db.User_weights.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(User_weights) {
      res.json(User_weights);
    });
  });

  // DELETE route for deleting user weights
  app.delete("/api/user-weight/:id", function(req, res) {
    db.User_weights.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(User_weights) {
      res.json(User_weights);
    });
  });
}
