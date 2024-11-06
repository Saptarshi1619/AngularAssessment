import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { ViewAssessmentComponent } from './components/view-assessment/view-assessment.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakeassessmentComponent } from './components/takeassessment/takeassessment.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'viewassessment', component:ViewAssessmentComponent},
  {path:'admin', component:AdminComponent},
  {path:'cart', component:CartComponent},
  {path:'takeassessment/:id', component:TakeassessmentComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
