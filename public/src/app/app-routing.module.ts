import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashComponent } from './dash/dash.component';
import { TopicComponent } from './topic/topic.component';
import { UserComponent } from './user/user.component';
import { TopicFormComponent } from './topic-form/topic-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'dash', pathMatch: 'full', component: DashComponent },
  { path: 'topic/:id', pathMatch: 'full', component: TopicComponent },
  { path: 'user/:id', pathMatch: 'full', component: UserComponent },
  { path: '**', component: DashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
