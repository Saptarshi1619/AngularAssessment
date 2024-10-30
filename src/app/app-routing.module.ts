import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { ViewAssessmentComponent } from './components/view-assessment/view-assessment.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/adminguard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'viewassessment', component:ViewAssessmentComponent},
  {path:'admin', component:AdminComponent,canActivate:[AdminGuard()]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
