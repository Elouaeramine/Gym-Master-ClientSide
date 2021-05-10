import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverGymsPageComponent } from './discover-gyms-page.component';

describe('DiscoverGymsPageComponent', () => {
  let component: DiscoverGymsPageComponent;
  let fixture: ComponentFixture<DiscoverGymsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverGymsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverGymsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
