/*
 * Post MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var AnswerSchema = new mongoose.Schema({
    text: {type: String, required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    _voteup: [{type: Schema.Types.ObjectId, ref: 'User'}],
    _votedown: [{type: Schema.Types.ObjectId, ref: 'User'}]
},{timestamps: true});

//register schema as model
var Answer = mongoose.model('Answer', AnswerSchema);
