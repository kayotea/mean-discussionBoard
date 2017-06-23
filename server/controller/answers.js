/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    createAnswer: (req, res) => {
        console.log('reached topics.js/createTopic() - topic:', req.body);
        //find user matching user passed in req
        User.findOne({username: req.body._user})
        .then(userdata => {
            //create new answer using given req data
            //and data from User.findOne()
            var answer = new Answer({
                text: req.body.text, 
                _user: userdata._id, 
                _topic: req.body._topic,
                _answers: [],
                _voteup: [],
                _votedown: []});
            console.log("new answer:",answer);
            answer.save(answer)//save answer
            .then(data => {
                //update User to contain answer
                userdata._answers.push(answer._id);
                userdata.save(userdata)//save update
                .then(data => {
                    console.log("userdata:",userdata);
                    //update Topic to contain answer
                    Topic.findOne({_id: answer._topic})
                    .then(topicdata => {
                        topicdata._answers.push(answer._id);
                        console.log("topicdata:",topicdata);
                        topicdata.save(topicdata)//save update
                        .then(data => {
                            console.log('success');
                            res.json(answer);
                        })
                        .catch(error => {
                            console.log('error answers/topicdata.save');
                            res.json(error);
                        })
                    })
                    .catch(error => {
                        console.log('error answers/userdata.save');
                        res.json(error);
                    })
                    })
                .catch(error => {
                    res.json(error);
                })
            })
            .catch(error => {
                console.log('error finding topic:', error);
                res.json(error);
            })
        })
    },

    voteUp: (req, res) => {
        console.log('reached answers.js/voteUp()');
        console.log(req.body);
        Answer.findOne({_id: req.body.answer})
        .then(answer => {
            User.findOne({username: req.body.user})
            .then(user => {
                console.log("answer:",answer);
                console.log('user:', user._id);
                answer._voteup.push(user._id);
                answer.save(answer)
                .then(data => {
                    res.json(data);
                })
                .catch(error => {
                    res.json(error);
                })
            })
            .catch(error => {
                res.json(error);
            })
        })
        .catch(error => {
            res.json(error);
        })
    },

    voteDown: (req, res) => {
        console.log('reached answers.js/voteDown()');
        console.log(req.body);
        Answer.findOne({_id: req.body.answer})
        .then(answer => {
            User.findOne({username: req.body.user})
            .then(user => {
                console.log("answer:",answer);
                console.log('user:', user._id);
                answer._votedown.push(user._id);
                answer.save(answer)
                .then(data => {
                    res.json(data);
                })
                .catch(error => {
                    res.json(error);
                })
            })
            .catch(error => {
                res.json(error);
            })
        })
        .catch(error => {
            res.json(error);
        })
    }
}