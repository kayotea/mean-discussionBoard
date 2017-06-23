/*
 * Post MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var CommentSchema = new mongoose.Schema({
    text: {type: String, required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _answer: {type: Schema.Types.ObjectId, ref: 'Answer'}
});

//register schema as model
var Comment = mongoose.model('Comment', CommentSchema);
