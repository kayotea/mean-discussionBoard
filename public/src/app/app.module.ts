import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashComponent } from './dash/dash.component';
import { TopicComponent } from './topic/topic.component';
import { UserComponent } from './user/user.component';
import { TopicFormComponent } from './topic-form/topic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashComponent,
    TopicComponent,
    UserComponent,
    TopicFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
