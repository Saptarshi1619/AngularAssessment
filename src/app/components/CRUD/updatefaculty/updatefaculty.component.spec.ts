import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefacultyComponent } from './updatefaculty.component';

describe('UpdatefacultyComponent', () => {
  let component: UpdatefacultyComponent;
  let fixture: ComponentFixture<UpdatefacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatefacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatefacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
