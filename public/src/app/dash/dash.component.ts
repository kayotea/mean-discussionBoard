import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from "@angular/router";
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  user: string;
  users: Array<object>;
  topics: Array<object>;
  constructor(private _cookieService: CookieService, private _router: Router, private _httpService: HttpService) {
    this.user = this._cookieService.get('username');
  }

  ngOnInit() {
    var cookie = this._cookieService.get('username');
    console.log(cookie);
    if ( cookie == undefined ){
      this._router.navigate(['/']);
    }
    this.getUsers();
    this.getTopics();
  }
  
  logout(){
    console.log('logout');
    this._cookieService.removeAll();
    this._router.navigate(['/']);
  }

  getUsers(){
    this._httpService.findUsers()
    .then(users => {
      console.log('users found');
      this.users = users;
    })
    .catch(error => {console.log('error finding users');})
  }
  getTopics(){
    this._httpService.findTopics()
    .then(topics => {
      console.log('users found');
      this.topics = topics;
    })
    .catch(error => {console.log('error finding users');})
  }

  refreshTrigger(){
    this.getUsers();
    this.getTopics();
  }
}
