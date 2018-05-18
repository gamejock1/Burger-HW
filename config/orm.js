var connection = require("./connection.js");


var orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM burgers", function (err, res) {
      cb(res);
    })
  },
  insertOne: function (burgerName, devoured) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)", [burgerName, devoured], function (err, res) {
      // console.log(data);
    })
  },
  updateOne: function (devoured, id) {
    var querystring = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(querystring, [devoured, id], function (err, res) {
      console.log('burger updated');
    })
  },
  deleteOne: function (dataId) {
    connection.query("DELETE FROM burgers WHERE id = ?", dataId, function (err, res) {
      console.log('Burger deleted!');
    })
  }

};

module.exports = orm;
