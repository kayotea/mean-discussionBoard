import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpService } from './../http.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user: string;
  constructor(private _cookieService: CookieService, private _router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    console.log(this._cookieService.get('username'));
  }
  submitForm(form){
    this._cookieService.put('username', this.user);
    console.log(this._cookieService.get('username'));
    this.addUser(this.user);
    form.resetForm();
    this._router.navigate(['dash']);
  }
  addUser(user) {
    console.log('reached landingcomponent/addUser() - user:', user);
    this._httpService.addUser(user)
    .then(user => {console.log('user added');})
    .catch(error => {console.log('error');})
  }

}
