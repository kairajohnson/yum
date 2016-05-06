var mongoose = require('mongoose')
var Schema = require("../db/schema.js");


var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel

RestaurantModel.remove({}, function(err){
  console.log(err)
});

ItemModel.remove({}, function(err){
  console.log(err)
});

var smokeys = new RestaurantModel({name: "Smokeys", "address": {"street": "4714 14th St NW, Washington, DC", "zipcode": 20011}, yelp_url:"http://www.yelp.com/biz/smokeys-washington-3" })

var selam = new RestaurantModel({name: "Selam", "address": {"street": "1524 U St NW, Washington, DC ", "zipcode": 20009}, yelp_url:"http://www.yelp.com/biz/selam-restaurant-washington" })

var item1 = new ItemModel({title: "Fried Chicken and Potato Wedges with Mumbo Sauce, Steak and Cheese, Steak and Eggs, Chicken and Waffles, Fried Fish"});
var item2 = new ItemModel({title: "Lamb Tibbs, Tsebhi Dorho, Shiro, Hamli Tibbs"});

var restaurants = [smokeys, selam]
var items = [item1, item2]

for(var i =0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+2])
  restaurants[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("restaurant was saved")
    }
  })
};
