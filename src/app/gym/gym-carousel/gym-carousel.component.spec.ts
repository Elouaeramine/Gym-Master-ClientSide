import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCarouselComponent } from './gym-carousel.component';

describe('GymCarouselComponent', () => {
  let component: GymCarouselComponent;
  let fixture: ComponentFixture<GymCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
