import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AuthService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

class MockAuthService {
  user = of(true);

  logout() {}
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService }
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the header when user is logged in', () => {
    component.isLoggedin = true;
    fixture.detectChanges();
    const headerElement = fixture.nativeElement.querySelector('.header');
    expect(headerElement).toBeTruthy();
  });

  it('should not display the header when user is not logged in', () => {
    component.isLoggedin = false;
    fixture.detectChanges();
    const headerElement = fixture.nativeElement.querySelector('.header');
    expect(headerElement).toBeFalsy();
  });

  it('should call onLogout() and AuthService.logout() when logout is clicked', (done) => {
    const authServiceLogoutSpy = spyOn(authService, 'logout');
    component.isLoggedin = true;
    fixture.detectChanges();

    const userDataElement = fixture.debugElement.query(By.css('.user-data')).nativeElement;
    userDataElement.click();
    fixture.detectChanges();

    setTimeout(() => {
      const logoutLink = fixture.debugElement.query(By.css('.dropdown a')).nativeElement;
      logoutLink.click();
      expect(authServiceLogoutSpy).toHaveBeenCalled();
      done();
    }, 0);
  });
});
