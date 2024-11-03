import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssessmentscoreComponent } from './update-assessmentscore.component';

describe('UpdateAssessmentscoreComponent', () => {
  let component: UpdateAssessmentscoreComponent;
  let fixture: ComponentFixture<UpdateAssessmentscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAssessmentscoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAssessmentscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
