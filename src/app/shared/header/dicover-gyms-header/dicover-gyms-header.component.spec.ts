import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicoverGymsHeaderComponent } from './dicover-gyms-header.component';

describe('DicoverGymsHeaderComponent', () => {
  let component: DicoverGymsHeaderComponent;
  let fixture: ComponentFixture<DicoverGymsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicoverGymsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicoverGymsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
