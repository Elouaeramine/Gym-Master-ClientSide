import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardsListComponent } from './blog-cards-list.component';

describe('BlogCardsListComponent', () => {
  let component: BlogCardsListComponent;
  let fixture: ComponentFixture<BlogCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
