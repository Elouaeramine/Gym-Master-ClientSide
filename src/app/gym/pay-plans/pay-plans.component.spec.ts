import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPlansComponent } from './pay-plans.component';

describe('PayPlansComponent', () => {
  let component: PayPlansComponent;
  let fixture: ComponentFixture<PayPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
