import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingMaterialListComponent } from './teaching-material-list.component';

describe('TeachingMaterialListComponent', () => {
  let component: TeachingMaterialListComponent;
  let fixture: ComponentFixture<TeachingMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingMaterialListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachingMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
