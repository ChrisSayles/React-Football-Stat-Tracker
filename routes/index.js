var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var playerController = require('../controllers/playerController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  res.render('CreatePlayer', { title: 'Player' });
});

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
