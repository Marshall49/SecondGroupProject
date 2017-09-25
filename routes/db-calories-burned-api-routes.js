var db = require("../models");

module.exports = function(app) {


  // GET route for getting all of the calories burned
  app.get("/", function(req, res) {
    db.User_calories.findAll({})
    .then(function(User_calories) {
      res.json(User_calories);
    });
  });

   // POST route for saving user new calories
  app.post("/api/user-calories", function(req, res) {
    console.log(req.body);
    db.User_calories.create({
      calories_burned: req.body.calories_burned
    })
    .then(function(User_calories) {
      res.json(User_calories);
    });
  });

  // PUT route for updating user calories
  app.put("/api/user-calories/:id", function(req, res) {
    db.User_calories.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(User_calories) {
      res.json(User_calories);
    });
  });

  // DELETE route for deleting user calories
  app.delete("/api/user-calories/:id", function(req, res) {
    db.User_calories.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(User_calories) {
      res.json(User_calories);
    });
  });
}
