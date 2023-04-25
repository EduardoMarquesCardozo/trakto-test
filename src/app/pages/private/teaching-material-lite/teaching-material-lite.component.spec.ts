import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingMaterialLiteComponent } from './teaching-material-lite.component';

describe('TeachingMaterialLiteComponent', () => {
  let component: TeachingMaterialLiteComponent;
  let fixture: ComponentFixture<TeachingMaterialLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingMaterialLiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingMaterialLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
