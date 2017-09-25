var db = require("../models");

module.exports = function(app) {


  // GET route for getting all of the user mileages
  app.get("/", function(req, res) {
    db.Activity_mileages.findAll({})
    .then(function(Activity_mileages) {
      res.json(Activity_mileages);
    });
  });

   // POST route for saving user mileages
  app.post("/api/user-mileage", function(req, res) {
    console.log(req.body);
    db.Activity_mileages.create({
      activity_mileage: req.body.activity_mileage
    })
    .then(function(Activity_mileages) {
      res.json(Activity_mileages);
    });
  });

  // PUT route for updating user mileages
  app.put("/api/user-mileage", function(req, res) {
    db.Activity_mileages.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(Activity_mileages) {
      res.json(Activity_mileages);
    });
  });

  // DELETE route for deleting user mileages
  app.delete("/api/user-mileage/:id", function(req, res) {
    db.Activity_mileages.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(Activity_mileages) {
      res.json(Activity_mileages);
    });
  });
}
