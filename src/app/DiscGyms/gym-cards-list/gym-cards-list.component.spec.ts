import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCardsListComponent } from './gym-cards-list.component';

describe('GymCardsListComponent', () => {
  let component: GymCardsListComponent;
  let fixture: ComponentFixture<GymCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
