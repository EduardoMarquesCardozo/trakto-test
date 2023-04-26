import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleAccessComponent } from '../../../components/module-access/module-access.component';

import { ModulesComponent } from './modules.component';

describe('ModulesComponent', () => {
  let component: ModulesComponent;
  let fixture: ComponentFixture<ModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModulesComponent, ModuleAccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-module-access components', () => {
    const moduleAccessElements = fixture.nativeElement.querySelectorAll('app-module-access');
    expect(moduleAccessElements.length).toBe(4);
  });

  it('should pass the correct properties to the app-module-access components', () => {
    const moduleAccessElements = fixture.nativeElement.querySelectorAll('app-module-access');

    const moduleNames = ['Material didático', 'Quiz', 'Desenho', 'Youtube'];
    const modulePaths = [
      'assets/StudyBook.png',
      'assets/Medal.png',
      'assets/Paint.png',
      'assets/Youtube.png',
    ];
    const moduleColors = ['blue', 'green', 'purple', 'beige'];

    for (let i = 0; i < moduleAccessElements.length; i++) {
      expect(moduleAccessElements[i].getAttribute('ng-reflect-name')).toBe(moduleNames[i]);
      expect(moduleAccessElements[i].getAttribute('ng-reflect-path')).toBe(modulePaths[i]);
      expect(moduleAccessElements[i].getAttribute('ng-reflect-color')).toBe(moduleColors[i]);
    }
  });
});
