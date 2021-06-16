import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCardComponent } from './gym-card.component';

describe('GymCardComponent', () => {
  let component: GymCardComponent;
  let fixture: ComponentFixture<GymCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
