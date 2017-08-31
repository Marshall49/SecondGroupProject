var db = require("../models");

module.exports = function(app) {


  // GET route for getting all of the user mileages
  app.get("/", function(req, res) {
    db.User_mileage.findAll({})
    .then(function(dbUser_mileage) {
      res.json(dbUser_mileage);
    });
  });

   // POST route for saving user mileages
  app.post("/api/user-mileage", function(req, res) {
    console.log(req.body);
    db.User_mileage.create({
      user_name: req.body.user_name,
      total_mileage: req.body.total_mileage     
    })
    .then(function(dbUser_mileage) {
      res.json(dbUser_mileage);
    });
  });

  // PUT route for updating user mileages
  app.put("/api/user-mileage", function(req, res) {
    db.User_mileage.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbUser_mileage) {
      res.json(dbUser_mileage);
    });
  });

  // DELETE route for deleting user mileages
  app.delete("/api/user-mileage/:id", function(req, res) {
    db.User_mileage.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser_mileage) {
      res.json(User_mileage);
    });
  });
}