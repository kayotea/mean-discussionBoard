/*
 * VARIABLES
 */
var users = require('../controller/users.js'),
    topics = require('../controller/topics.js'),
    comments = require('../controller/comments.js'),
    answers = require('../controller/answers.js'),
    path = require('path');

/*
 * ROUTES
 */
module.exports = function(app){
    
    //users
    app.get('/users', (req, res) => {
        users.readUsers(req, res);
    });
    app.post('/new_user', (req, res) => {
        console.log('post(/new_user):',req.body);
        users.createUser(req, res);
    });
    app.get('/find_user/:id', (req, res) => {
        users.oneUser(req, res);
    });
    //topics
    app.get('/topics', (req, res) => {
        topics.readTopics(req, res);
    });
    app.post('/new_topic', (req, res) => {
        topics.createTopic(req, res);
    });
    app.get('/find_topic/:id', (req, res) => {
        topics.oneTopic(req, res);
    });
    //answers
    app.post('/new_answer', (req, res) => {
        answers.createAnswer(req, res);
    });
    app.post('/vote_up', (req, res) => {
        answers.voteUp(req, res);
    });
    app.post('/vote_down', (req, res) => {
        answers.voteDown(req, res);
    });
    //comments
    app.post('/new_comment', (req, res) => {
        comments.createComment(req, res);
    });
    //catch-all
    app.all("*", (req,res) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}