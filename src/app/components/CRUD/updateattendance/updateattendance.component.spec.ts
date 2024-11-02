import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateattendanceComponent } from './updateattendance.component';

describe('UpdateattendanceComponent', () => {
  let component: UpdateattendanceComponent;
  let fixture: ComponentFixture<UpdateattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateattendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
