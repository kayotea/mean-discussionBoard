import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Topic } from './../Classes/topic';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from './../http.service';
// import { Router } from "@angular/router";

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css']
})
export class TopicFormComponent implements OnInit {
  newtopic = new Topic();
  @Output() refreshTopics = new EventEmitter();

  triggerRefresh(){
    this.refreshTopics.emit();
  }

  constructor(private _cookieService: CookieService, private _httpService: HttpService) { }

  ngOnInit() {
  }
  submitTopic(form){
    console.log('here');
    this.addTopic(form);
  }

  addTopic(form) {
    this.newtopic._user = this._cookieService.get('username');
    console.log('reached topic-formcomponent/addTopic() - topic:', this.newtopic);
    this._httpService.addTopic(this.newtopic)
    .then(user => {
      console.log('topic added');
      this.triggerRefresh();
      form.resetForm();
      this.newtopic = new Topic;
    })
    .catch(error => {console.log('error');})
  }
}
