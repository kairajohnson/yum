var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant_db');

var db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});

db.once('open', function(){
  console.log("database has been connected!")
});



var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var RestaurantSchema = new Schema({
  name: String,
    address: {
      street: String,
      zipcode: Number
    },
  yelp_url: String,

});

var ItemSchema = new Schema({
  title:      String
});

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var ItemModel       = mongoose.model("Item", ItemSchema);

module.exports={
  RestaurantModel: RestaurantModel,
  ItemModel: ItemModel
};
