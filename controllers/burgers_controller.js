
var express = require("express");
var router = express.Router();
var orm = require("../config/orm.js");



router.get("/", function(req, res) {
  orm.selectAll(function(data) {
    var burgersObj = {
      burgers: data
    };
    console.log(burgersObj);
    res.render("index", burgersObj);
  });
});

router.post("/api/burgers", function(req, res) {
  orm.insertOne(req.body.burger_name, req.body.devoured);
});

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   orm.updateOne({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


router.delete("/api/burgers/:id", function(req, res) {
  orm.deleteOne(req.params.id)
});

module.exports = router;

// orm.insertOne('The Homewrecker', 1);

// orm.selectAll(function(data) {
//   var burgersObj = {
//     burgers: data
//   };
//   console.log(burgersObj);
// });

