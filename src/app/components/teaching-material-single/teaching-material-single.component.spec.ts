import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingMaterialSingleComponent } from './teaching-material-single.component';

describe('TeachingMaterialSingleComponent', () => {
  let component: TeachingMaterialSingleComponent;
  let fixture: ComponentFixture<TeachingMaterialSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachingMaterialSingleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TeachingMaterialSingleComponent);
    component = fixture.componentInstance;
    component.document = {
      id: '1',
      title: 'Test Document',
      updated_at: new Date(),
      thumbs: {
        low: 'assets/test-thumb.svg',
        raw: 'assets/test-thumb-raw.svg',
        medium: 'assets/test-thumb-medium.svg',
        high: 'assets/test-thumb-hights.svg'
      }
    };
    component.pages = 10;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the document title', () => {
    const titleElement = fixture.nativeElement.querySelector('p');
    expect(titleElement.textContent).toContain('Test Document');
  });

  it('should render the document thumbnail', () => {
    const imageElement = fixture.nativeElement.querySelector('img');
    expect(imageElement.src).toContain('assets/test-thumb.svg');
  });

  it('should render the number of pages', () => {
    const chipElement = fixture.nativeElement.querySelector('.chip');
    expect(chipElement.textContent).toContain('10 Slides');
  });
});
