import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssessmentscoreComponent } from './add-assessmentscore.component';

describe('AddAssessmentscoreComponent', () => {
  let component: AddAssessmentscoreComponent;
  let fixture: ComponentFixture<AddAssessmentscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAssessmentscoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssessmentscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
