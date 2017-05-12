var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var playerController = require('../controllers/playerController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/playerCreate', function(req,res,next){
  let data = req.body;
  playerController.create(req.body, function(err,res){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return;
    }
    res.json({
      confirmation: 'success',
      message: res
    });
  });
});



module.exports = router;
