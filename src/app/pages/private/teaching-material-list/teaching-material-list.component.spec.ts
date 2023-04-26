import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeachingMaterialListComponent } from './teaching-material-list.component';
import { DocumentService } from 'src/app/services/document-service';
import { of } from 'rxjs';
import { IDocument } from 'src/app/data/document';
import { Pagination } from 'src/app/data/pagination';
import { TeachingMaterialSingleComponent } from '../../../components/teaching-material-single/teaching-material-single.component';
import { RouterTestingModule } from '@angular/router/testing';

class DocumentServiceMock {
  get() {
    const documentList: Pagination<IDocument> = {
      hasNextPage: false,
      hasPreviousPage: false,
      data: [
        {
          id: '1',
          updated_at: new Date(),
          title: 'Test Document 1',
        },
        {
          id: '2',
          updated_at: new Date(),
          title: 'Test Document 2',
        },
      ],
    };
    return of(documentList);
  }
}

describe('TeachingMaterialListComponent', () => {
  let component: TeachingMaterialListComponent;
  let fixture: ComponentFixture<TeachingMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TeachingMaterialListComponent, TeachingMaterialSingleComponent],
      providers: [{ provide: DocumentService, useClass: DocumentServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TeachingMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load documentList from DocumentService', () => {
    expect(component.documentList.data.length).toEqual(2);
  });

  it('should render app-teaching-material-single components', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('app-teaching-material-single').length).toEqual(2);
  });
});
