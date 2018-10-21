var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    _id: Schema.Types.ObjectId,
    tags: [],
    date:{ type: Date, default: Date.now },
    title: String,
    author: String,
    body: String
});

module.exports = mongoose.model('Post', PostSchema);