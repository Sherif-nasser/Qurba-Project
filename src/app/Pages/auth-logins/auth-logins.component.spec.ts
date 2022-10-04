import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginsComponent } from './auth-logins.component';

describe('AuthLoginsComponent', () => {
  let component: AuthLoginsComponent;
  let fixture: ComponentFixture<AuthLoginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLoginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
