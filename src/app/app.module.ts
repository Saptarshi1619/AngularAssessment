import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewAssessmentComponent } from './components/view-assessment/view-assessment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LatestAssessmentsComponent } from './components/latest-assessments/latest-assessments.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ViewcourseComponent } from './components/CRUD/viewcourse/viewcourse.component';
import { AddcourseComponent } from './components/CRUD/addcourse/addcourse.component';
import { UpdatecourseComponent } from './components/CRUD/updatecourse/updatecourse.component';
import { ViewfacultyComponent } from './components/CRUD/viewfaculty/viewfaculty.component';
import { AddfacultyComponent } from './components/CRUD/addfaculty/addfaculty.component';
import { UpdatefacultyComponent } from './components/CRUD/updatefaculty/updatefaculty.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddassessmentComponent } from './components/CRUD/addassessment/addassessment.component';
import { UpdateassessmentComponent } from './components/CRUD/updateassessment/updateassessment.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AssessmentComponent,
    AdminComponent,
    ViewAssessmentComponent,
    LatestAssessmentsComponent,
    ViewcourseComponent,
    AddcourseComponent,
    UpdatecourseComponent,
    ViewfacultyComponent,
    AddfacultyComponent,
    UpdatefacultyComponent,
    RegisterModalComponent,
    AddassessmentComponent,
    UpdateassessmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatAccordion,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
