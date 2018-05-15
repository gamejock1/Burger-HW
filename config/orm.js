


var orm = {
  selectAll: function(cb){
    connection.query("SELECT * FROM burgers", tableName, function(err, res){
      cb(json(res))
    })
  },
  insertOne: function(burgerName, devoured){
    connection.query("INSERT INTO burgers VALUES (?,?)", [burgerName, devoured], function(err, res){
    console.log('burger added');
    })
  },
  updateOne: function(burgerName, oldBurger){
    var querystring = "UPDATE burgers SET burger_name = ?, devoured = 0 WHERE burger_name = ?";
    connection.query(querystring, [burgerName, oldBurger], function(err, res){
    console.log('burger added');
    })
  }

};