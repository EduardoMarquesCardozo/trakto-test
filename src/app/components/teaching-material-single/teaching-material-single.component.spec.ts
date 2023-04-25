import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingMaterialSingleComponent } from './teaching-material-single.component';

describe('TeachingMaterialSingleComponent', () => {
  let component: TeachingMaterialSingleComponent;
  let fixture: ComponentFixture<TeachingMaterialSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingMaterialSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingMaterialSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
