
var express = require("express");
var router = express.Router();
var orm = require("../config/orm.js");



router.get("/", function (req, res) {
  orm.selectAll(function (data) {
    var burgersObj = {
      burgers: data
    };
    console.log(burgersObj);
    res.render("index", burgersObj);
  });
});

router.post("/api/burgers", function (req, res) {
  orm.insertOne(req.body.burger_name, req.body.devoured);
});


router.delete("/api/burgers/:id", function (req, res) {
  orm.deleteOne(req.params.id)
});

router.put("/api/burgers/:id", function (req, res) {
  orm.updateOne(req.body.devoured, req.body.id);
});
module.exports = router;

