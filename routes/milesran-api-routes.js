// var db = require("../models");
//
// // Routes
// // =============================================================
// module.exports = function(app) {
//
//   // GET route for getting all of the posts
//   app.get("/api/miles-run", function(req, res) {
//     var query = {};
//     if (req.query.user_id) {
//       query.UserId = req.query.user_id;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Miles.findAll({
//       where: query,
//       include: [db.User]
//     }).then(function(dbMiles) {
//       res.json(dbMiles);
//     });
//   });
//
//   // Get rotue for retrieving a single post
//   app.get("/api/miles-run/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Miles.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.User]
//     }).then(function(dbMiles) {
//       res.json(dbMiles);
//     });
//   });
//
//   // POST route for saving a new post
//   app.post("/api/miles-run", function(req, res) {
//     db.Miles.create(req.body).then(function(dbMiles) {
//       res.json(dbMiles);
//     });
//   });
//
//   // DELETE route for deleting posts
//   app.delete("/api/miles-run/:id", function(req, res) {
//     db.Miles.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbMiles) {
//       res.json(dbMiles);
//     });
//   });
//
//   // PUT route for updating posts
//   app.put("/api/miles-run", function(req, res) {
//     db.Miles.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbMiles) {
//         res.json(dbMiles);
//       });
//   });
// };
