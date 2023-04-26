import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ModuleAccessComponent } from './module-access.component';

describe('ModuleAccessComponent', () => {
  let component: ModuleAccessComponent;
  let fixture: ComponentFixture<ModuleAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleAccessComponent],
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleAccessComponent);
    component = fixture.componentInstance;
    component.name = 'Test Module';
    component.color = 'blue';
    component.path = 'assets/test-image.svg';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input name', () => {
    const nameElement = fixture.nativeElement.querySelector('h1');
    expect(nameElement.textContent).toContain('Test Module');
  });

  it('should apply the input color as a class', () => {
    const circleElement = fixture.nativeElement.querySelector('.circle');
    expect(circleElement.classList).toContain('blue');
  });

  it('should render the input image path', () => {
    const imageElement = fixture.nativeElement.querySelector('img');
    expect(imageElement.src).toContain('assets/test-image.svg');
  });

  it('should have the correct routerLink', () => {
    const anchorElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(anchorElement.getAttribute('ng-reflect-router-link')).toBe('/teaching-lite');
  });
});
