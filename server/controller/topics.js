/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    readTopics: (req, res) => {
        console.log('reached readTopics()');
        Topic.find({}).sort({createdAt: -1})
        .populate('_user')
        .populate('_answers')
        .exec()
        .then(data => {
            console.log('success retreiving topics');
            console.log("data:",data);
            res.json(data);
        })
        .catch(error => {
            console.log('error retreiving topics');
            res.json(error);
        })
    },

    oneTopic: (req, res) => {
        console.log('reached oneTopic()');
        Topic.findOne({_id: req.params.id})
        .populate('_user')
        .populate({
            path: '_answers',
            model: 'Answer',
            populate: {
                path: '_user _comments',
                populate: {
                    path: '_user'
                }
            }
        })
        .exec()
        .then(data => {
            console.log('topic:', data);
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
    },

    createTopic: (req, res) => {
        console.log('reached topics.js/createTopic() - topic:', req.body);
        //find user matching user passed in req
        User.findOne({username: req.body._user})
        .then(data => {
            //create new topic using given req data
            //and data from User.find()
            var topic = new Topic({title: req.body.title, topic_text: req.body.topic_text, category: req.body.category, _user: data.id, _answers: []});
            console.log("new topic:",topic);

            topic.save(topic)
                //'topic' below must NOT be named data for nesting
                .then(topic => {
                    //add topic to user
                    console.log("user:",data);
                    data._topics.push(topic.id);
                    console.log("user:", data);

                    data.save(data)
                    .then(data => {
                        res.json(data);
                    })
                    .catch(error => {
                        res.json(error);
                    })
                })
                .catch(error => {
                    console.log('error adding topic');
                    res.json(error);
                })
        })
        .catch(error => {
            console.log('error finding topic:', error)
        })
    }
}