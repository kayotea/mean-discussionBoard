/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    createComment: (req, res) => {
        console.log('reached topics.js/createComment() - comment:', req.body);
        //find user matching user passed in req
        User.findOne({username: req.body._user})
        .then(userdata => {
            //create new answer using given req data
            //and data from User.findOne()
            var comment = new Comment({
                text: req.body.text, 
                _user: userdata._id, 
                _answer: req.body._answer});
            console.log("new comment:",comment);
            comment.save(comment)//save comment
            .then(data => {
                //update User to contain comment
                userdata._comments.push(comment._id);
                userdata.save(userdata)//save update
                .then(data => {
                    console.log("userdata:",userdata);
                    //update answer to contain comment
                    Answer.findOne({_id: comment._answer})
                    .then(answerdata => {
                        answerdata._comments.push(comment._id);
                        console.log("answerdata:",answerdata);
                        answerdata.save(answerdata)//save update
                        .then(data => {
                            console.log('success');
                            res.json(answer);
                        })
                        .catch(error => {
                            console.log('error comments/answerdata.save');
                            res.json(error);
                        })
                    })
                    .catch(error => {
                        console.log('error comments/userdata.save');
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
    }
}