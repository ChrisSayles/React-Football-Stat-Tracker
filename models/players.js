var mongoose = require('mongoose');
var playerSchema = new mongoose.Schema({

  profileId: {type:String, default: ''},
  firstName: {type:String, default: ''},
  lastName: {type:String, default: ''},
  height: {type:Number, default: null},
  age: {type:Number, default: null},
  profileUrl: {type:String, default: ''},
  status: {type:String, default: ''},
  position: {type:String, default: ''},
  team: {type:String, default: ''},
  college: {type:String, default: ''}
});

module.exports = mongoose.model('playerSchema', playerSchema);
