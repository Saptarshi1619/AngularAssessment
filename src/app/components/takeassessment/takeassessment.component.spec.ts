import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeassessmentComponent } from './takeassessment.component';

describe('TakeassessmentComponent', () => {
  let component: TakeassessmentComponent;
  let fixture: ComponentFixture<TakeassessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakeassessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
