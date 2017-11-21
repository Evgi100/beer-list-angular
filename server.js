var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/beers');

var Beer = require("./beerModel");

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/beers', function (req, res, next) {
  Beer.find({}, (handler(res, next)));
});

app.post('/beers', function (req, res, next) {
  Beer.create(req.body, handler(res, next));
});

app.delete('/beers/:id', function (req, res, next) {
  Beer.findByIdAndRemove(req.params.id, handler(res, next));
});

app.post('/beers/:id/reviews', function(req, res, next) {
      var updateObject={$push:{reviews: req.body}};
      Beer.findByIdAndUpdate(req.params.id,updateObject,{new:true},function(beer, next){
        res.send(req.body)
      });
  });

  app.delete('/beers/:id/reviews/:reviewid',function(req,res,next){
    var updateObject={$pull:{reviews:{_id:req.params.reviewid}}}
    Beer.findByIdAndUpdate(req.params.id,updateObject,{new:true},handler(res,next));
  });

  app.get('/beers/:id', function (req, res, next) {
    Beer.findById(req.params.id, handler(res, next));
  });


var handler = function (res, next) {
  return function (err, beer) {
    if (err) {
      return next(err);
    }
    res.send(beer);
  }
}



// error handler to catch 404 and forward to main error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});



app.listen(8000, function () {
  console.log("yo yo yo, on 8000!!")
});
