import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymPageComponent } from './gym-page.component';

describe('GymPageComponent', () => {
  let component: GymPageComponent;
  let fixture: ComponentFixture<GymPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
