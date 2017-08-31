var db = require("../models");

module.exports = function(app) {


  // GET route for getting all of the calories burned
  app.get("/", function(req, res) {
    db.App_userInfo.findAll({})
    .then(function(dbUser_caloriesBurned) {
      res.json(dbUser_caloriesBurned);
    });
  });

   // POST route for saving user new calories
  app.post("/api/user-calories", function(req, res) {
    console.log(req.body);
    db.User_caloriesBurned.create({
      user_name: req.body.user_name,
      calories_burned: req.body.calories_burned     
    })
    .then(function(dbUser_caloriesBurned) {
      res.json(dbUser_caloriesBurned);
    });
  });

  // PUT route for updating user calories
  app.put("/api/user-calories", function(req, res) {
    db.User_caloriesBurned.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbUser_caloriesBurned) {
      res.json(dbApp_userInfo);
    });
  });

  // DELETE route for deleting user calories
  app.delete("/api/user-calories/:id", function(req, res) {
    db.User_caloriesBurned.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser_caloriesBurned) {
      res.json(User_caloriesBurned);
    });
  });
}