var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var playerController = require('../controllers/playerController');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NFL Football Player Database' });
});



//ROUTES TO HARDCODED MARSHAWN LYNCH TEST
router.get('/nflplayer',function(req,res){
  var firstName=req.query.firstName;
  var lastName=req.query.lastName;
  console.log(firstName + " " + lastName)

   request('http://api.suredbits.com/nfl/v0/players/'+lastName+'/'+firstName, function(error,response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body);
      // res.render("nflplayer", {data: data});
      res.send(data)
      //DRILL DOWN WITH THIS SYNTAX
    }

   });
});




//DIRECTS TO CREATE PLAYER PAGE
router.get('/create', function(req, res, next) {
  res.render('CreatePlayer', { title: 'Player' });
});
//CREATED PLAYER IS SAVED TO MONGODB
router.post('/api/playerCreate', function(req,res,next){
  let data = req.body;
  playerController.create(req.body, function(err,result){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return;
    }
    res.json({
      confirmation: 'success',
      message: result
    });
  });
});

router.get('/api/players', function (req, res, next) {

  playerController.find(req.query, function (err, results) {
    if (err) {
      res.json({
        confirmation: 'fail',
        message: err
      });
      return;
    }
    res.json({
      confirmation: 'success',
      results: results
    });
  });

});




module.exports = router;
