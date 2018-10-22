var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    token: {
      type: String,
      unique: true,
      required: true
    },
    user_id: {
        type: Schema.Types.ObjectId
    }
  });

module.exports = mongoose.model('User', UserSchema);