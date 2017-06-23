/*
 * Topic MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var TopicSchema = new mongoose.Schema({
    title: {type: String, required: true},
    topic_text: {type: String},
    category: {type: String},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
},{timestamps: true});

//register schema as model
var Topic = mongoose.model('Topic', TopicSchema);
