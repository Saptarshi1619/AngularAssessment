import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAssessmentsComponent } from './latest-assessments.component';

describe('LatestAssessmentsComponent', () => {
  let component: LatestAssessmentsComponent;
  let fixture: ComponentFixture<LatestAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestAssessmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
