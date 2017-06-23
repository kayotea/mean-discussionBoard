/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    readUsers: (req, res) => {
        User.find({})
        .then(data => {
            console.log('success in users.js/index()');
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log('error in users.js/index()');
            res.json(err);
        })
    },

    oneUser: (req, res) => {
        console.log('reached oneUser()');
        User.findOne({_id: req.params.id})
        .then(data => {
            console.log('user:', data);
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
    },

    createUser: (req, res) => {
        console.log('reached users.js/createUser() - user:', req.body.username);
        User.find({username: req.body.username})
        .then(data => {
            console.log("data:",data);
            if (data.length == 0){
                console.log('user not found in database, adding user');
                var user = new User({username: req.body.username, _topics: [], _answers: [], _comments: []});
                console.log(user);
                user.save(user)
                .then(data => {
                    console.log('success! added user');
                    res.json(data);
                })
                .catch(error => {
                    console.log('error adding user');
                    res.json(error);
                })
            } else {
                console.log('user found in database, user not added');
                res.json(data);
            }
        })
        .catch(error => {
            console.log('error finding user:', error);
            res.json(error);
        })
    }
}