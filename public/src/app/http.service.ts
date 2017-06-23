import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  //CRUD - talk to back end

  /*users*/
  //add user to the database
  addUser(user) {
    console.log('reached addUser - user:', 
    user);
    return this._http.post('/new_user', {username: user})
    .map((data) => data.json())
    .toPromise();
  }
  //find users
  findUsers(){
    console.log('reached findUsers');
    return this._http.get('/users')
    .map(data => data.json())
    .toPromise();
  }
  //find user by id
  findUser(id){
    console.log('reached findUser(id)');
    return this._http.get('/find_user/'+id)
    .map(data => data.json())
    .toPromise();
  }

  /*topics*/
  //add topic to database
  addTopic(topic) {
    console.log('reached addTopic - topic:', 
    topic);
    return this._http.post('/new_topic', topic)
    .map((data) => data.json())
    .toPromise();
  }
  //find topics
  findTopics(){
    console.log('reached findTopics');
    return this._http.get('/topics')
    .map(data => data.json())
    .toPromise();
  }
  //find topic by id
  findTopic(id){
    console.log('reached findTopic(id)');
    return this._http.get('/find_topic/'+id)
    .map(data => data.json())
    .toPromise();
  }
  
  /* posts/answers */
  //add answer
  addAnswer(answer){
    console.log('reached addAnswer()');
    return this._http.post('/new_answer', answer)
    .map(data => data.json())
    .toPromise();
  }
  //upvote answer
  upVote(info) {
    console.log('reached upVote()');
    return this._http.post('/vote_up', info)
    .map(data => data.json())
    .toPromise();
  }
  //downvote answer
  downVote(info) {
    console.log('reached downVote()');
    return this._http.post('/vote_down', info)
    .map(data => data.json())
    .toPromise();
  }

  /* add comment */
  addComment(comment){
    console.log('reached addComment()');
    return this._http.post('/new_comment', comment)
    .map(data => data.json())
    .toPromise();
  }
}
