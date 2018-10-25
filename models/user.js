var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
    },
    enabled: {
        type: Boolean,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
  });

UserSchema.methods.checkPassword = function(password, callback) {
    if(this.password == password) {
        callback(true);
    } else {
        callback(false);
    }
}

module.exports = mongoose.model('User', UserSchema);