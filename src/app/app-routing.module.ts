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
import { ContactusComponent } from './components/contactus/contactus.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'viewassessment', component:ViewAssessmentComponent},
  {path:'admin', component:AdminComponent},
  {path:'cart', component:CartComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'takeassessment/:id', component:TakeassessmentComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
