import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpService } from './../http.service';
import { User } from './../classes/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User;
  userparam: string;
  constructor(private _cookieService: CookieService, private _router: Router, private _activatedRoute: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    var cookie = this._cookieService.get('username');
    console.log(cookie);
    if ( cookie == undefined ){
      this._router.navigate(['/']);
    }
    this._activatedRoute.params.subscribe((param) => {
      console.log(param.id);
      this.userparam = param.id;
      this.getUser(this.userparam);
    })
    console.log(this.user);
  }

  getUser(id){
    this._httpService.findUser(id)
    .then(data => {
      console.log('success');
      this.user = data;
      console.log("this.topic:",this.user);
    })
    .catch(error => {
      console.log('fail');
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
