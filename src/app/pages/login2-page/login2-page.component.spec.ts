import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login2PageComponent } from './login2-page.component';

describe('Login2PageComponent', () => {
  let component: Login2PageComponent;
  let fixture: ComponentFixture<Login2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Login2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
