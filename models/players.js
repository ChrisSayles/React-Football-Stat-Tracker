var mongoose = require('mongoose');
var playerSchema = new mongoose.Schema({

  profileId: String,
  firstName: String,
  lastName: String,
  height: Number,
  age: Number,
  profileUrl: String,
  status: String,
  position: String,
  team: String,
  college: String
});

module.exports = mongoose.model('playerSchema', playerSchema);
