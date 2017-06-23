import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpService } from './../http.service';
import { Answer } from './../classes/answer';
import { Topic } from './../classes/topic';
import { Comment } from './../classes/comment';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  user = this._cookieService.get('username');
  topic = new Topic;
  param: string;
  newpost = new Answer;
  constructor(private _cookieService: CookieService, private _router: Router, private _activatedRoute: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    var cookie = this._cookieService.get('username');
    console.log(cookie);
    if ( cookie == undefined ){
      this._router.navigate(['/']);
    }
    this._activatedRoute.params.subscribe((param) => {
      console.log(param.id);
      this.param = param.id;
      this.getTopic(this.param);
      console.log("this.topic:",this.topic);
    })
  }

  getTopic(id){
    this._httpService.findTopic(id)
    .then(data => {
      console.log('success');
      this.topic = data;
      console.log("this.topic:",this.topic);
    })
    .catch(error => {
      console.log('fail');
    })
  }

  submitPost(form){
    this.newpost._user = this.user;
    this.newpost._topic = this.topic._id;
    console.log("this.newpost:",this.newpost);
    this._httpService.addAnswer(this.newpost)
    .then(data => {
      this.getTopic(this.param);
      console.log('post added');
      form.resetForm();
    })
    .catch(error => {
      console.log('fail adding post');
    })
  }

  submitComment(answer, comment){
    var newcomment = new Comment;
    newcomment._user = this.user;
    newcomment._answer = answer._id;
    newcomment.text = comment
    console.log("this.newcomment:",newcomment);
    console.log("comment:", comment);
    this._httpService.addComment(newcomment)
    .then(data => {
      this.getTopic(this.param);
      console.log('comment added');
    })
    .catch(error => {
      console.log('fail adding comment');
    })
  }

  upVote(answer){
    console.log('upVote()');
    console.log(answer);
    var info = {
      answer: answer._id,
      user: this.user
    }
    console.log("info:",info);
    this._httpService.upVote(info)
    .then(data => {
      this.getTopic(this.param);
      console.log('upvote added');
    })
    .catch(error => {
      console.log('upvote error');
    })
  }

  downVote(answer){
    console.log('downVote()');
    console.log(answer);
    var info = {
      answer: answer._id,
      user: this.user
    }
    console.log("info:",info);
    this._httpService.downVote(info)
    .then(data => {
      this.getTopic(this.param);
      console.log('upvote added');
    })
    .catch(error => {
      console.log('upvote error');
    })
  }

  dashboard() {
    this._router.navigate(['/dash']);
  }
  logout(){
    console.log('logout');
    this._cookieService.removeAll();
    this._router.navigate(['/']);
  }

}
