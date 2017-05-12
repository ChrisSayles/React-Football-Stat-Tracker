const players = require('../models/players');

// CRUD operators in export
module.exports = {
  find: function(params, callback){
    players.find(params, function(err, players){
      if(err){
        // error has to be first parameter, payload is 2nd
        callback(err, null);
        return;
      }
      callback(null, players);
    });
  },
  findById: function(id, callback){
    players.findById(id, function(err, player){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, player);
    })
  },
  create: function(params, callback){
    players.create(params, function(err, player){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, player);
    })
  },
  update: function(id, params, callback){
    players.findByIdAndUpdate(id, params, {new:true}, function(err, player){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, player);
    })
  },
  delete: function(id, callback){
    players.findByIdAndRemove(id, function(err){
      if(err){
        callback(err, null);
        return;
      }
      callback(null, null);
    })
  }
}
