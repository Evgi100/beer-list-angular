var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  name: String,
  text: String
});

var beerSchema = new Schema({
  name: { type: String },
  style: { type: String },
  image_url: { type: String },
  abv: { type: Number },
  ratings: [Number],
  ratingTotal: { type: Number },
  numberOfRatings: { type: Number },
  reviews:[reviewSchema]
});

var Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
