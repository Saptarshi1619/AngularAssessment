import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssessmentscoreComponent } from './view-assessmentscore.component';

describe('ViewAssessmentscoreComponent', () => {
  let component: ViewAssessmentscoreComponent;
  let fixture: ComponentFixture<ViewAssessmentscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAssessmentscoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAssessmentscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
