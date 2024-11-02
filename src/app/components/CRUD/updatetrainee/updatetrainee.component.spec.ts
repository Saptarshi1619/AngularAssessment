import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetraineeComponent } from './updatetrainee.component';

describe('UpdatetraineeComponent', () => {
  let component: UpdatetraineeComponent;
  let fixture: ComponentFixture<UpdatetraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatetraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
