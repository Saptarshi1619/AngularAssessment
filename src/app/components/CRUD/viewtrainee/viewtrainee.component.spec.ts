import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtraineeComponent } from './viewtrainee.component';

describe('ViewtraineeComponent', () => {
  let component: ViewtraineeComponent;
  let fixture: ComponentFixture<ViewtraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewtraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
