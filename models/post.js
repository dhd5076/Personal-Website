var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, auto: true},
    tags: [],
    date:{ type: Date, default: Date.now },
    title: String,
    author: String,
    body: String,
    prev: String
});

module.exports = mongoose.model('Post', PostSchema);