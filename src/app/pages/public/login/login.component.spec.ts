import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth-service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

class AuthServiceMock {
  login(email: string, password: string) {
    return of(true);
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useClass: AuthServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email and password', () => {
    component.form.controls['email'].setValue('test@example.com');
    component.form.controls['password'].setValue('password');
    expect(component.form.valid).toBeTruthy();
  });

  it('should call AuthService.login() when onSubmit() is called', () => {
    const authService = TestBed.inject(AuthService);
    const authServiceSpy = spyOn(authService, 'login').and.callThrough();
    const routerSpy = spyOn(router, 'navigateByUrl').and.stub();

    component.form.controls['email'].setValue('test@example.com');
    component.form.controls['password'].setValue('password');
    component.onSubmit();

    expect(authServiceSpy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith('/modules');
  });
});
