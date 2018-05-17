var connection = require("./connection.js");


var orm = {
  selectAll: function(cb){
    connection.query("SELECT * FROM burgers", function(err, res){
      cb(res);
    })
  },
  insertOne: function(burgerName, devoured){
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)", [burgerName, devoured], function(err, res){
    // console.log(data);
    })
  },
  updateOne: function(burgerName, oldBurger){
    var querystring = "UPDATE burgers SET burger_name = ?, devoured = 0 WHERE burger_name = ?";
    connection.query(querystring, [burgerName, oldBurger], function(err, res){
    console.log('burger updated');
    })
  },
  deleteOne: function(dataId){
    connection.query("DELETE FROM burgers WHERE id = ?", dataId, function(err, res){
      console.log('Burger deleted!');
      })
  }

};

module.exports = orm;
