/*
 * User MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    _topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

//register schema as model
var User = mongoose.model('User', UserSchema);
