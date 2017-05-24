var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var playerController = require('../controllers/playerController');
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NFL Football Player Database' });
});

//ROUTES TO PLAYER BASIC INFO
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

//ROUTES TO PLAYER STATS
router.get('/nflplayerstats',function(req,res){
  var firstNameStats=req.query.firstName;
  var lastNameStats=req.query.lastName;
  console.log(firstNameStats + " " + lastNameStats)

   request('http://api.suredbits.com/nfl/v0/stats/' + lastNameStats + '/' +firstNameStats, function(error,response, body){
    if(!error && response.statusCode == 200){
      var datastats = JSON.parse(body);
      // res.render("nflplayer", {data: data});
      res.send(datastats)
      //DRILL DOWN WITH THIS SYNTAX
    }

   });
});

//ROUTES TO TEAM ROSTER
router.get('/nflroster',function(req,res){
  var teamabbreviation=req.query.nflroster;
  console.log(teamabbreviation)

   request( 'http://api.suredbits.com/nfl/v0/team/'+teamabbreviation+'/roster', function(error,response, body){
    if(!error && response.statusCode == 200){
      var datastats = JSON.parse(body);
      // res.render("nflplayer", {data: data});
      res.send(datastats)
      //DRILL DOWN WITH THIS SYNTAX
    }

   });
});

//TEAM SCHEDULE
router.get('/nflschedule',function(req,res){
  var teamschedule=req.query.nflschedule;
  console.log(teamschedule)

   request( 'http://api.suredbits.com/nfl/v0/team/'+teamschedule+'/schedule', function(error,response, body){
    if(!error && response.statusCode == 200){
      var schedule = JSON.parse(body);
      // res.render("nflplayer", {data: data});
      res.send(schedule)
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

router.get('*', function(req, res, next) {
  res.render('index', { title: 'NFL Football Player Database' });
});



module.exports = router;
