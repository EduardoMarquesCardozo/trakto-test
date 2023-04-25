import { Component, OnInit } from '@angular/core';
import { IDocument } from 'src/app/data/document';
import { Pagination } from 'src/app/data/pagination';
import { DocumentService } from 'src/app/services/document-service';

@Component({
  selector: 'app-teaching-material-list',
  templateUrl: './teaching-material-list.component.html',
  styleUrls: ['./teaching-material-list.component.scss']
})
export class TeachingMaterialListComponent implements OnInit {
  documentList!: Pagination<IDocument>;
  constructor(private documentService: DocumentService ) {}

  ngOnInit(): void {
    this.getLiteDocuments();
  }

  getLiteDocuments(){
    this.documentService.get(50)
    .subscribe(
        (result) => {
          this.documentList = result;
        }
    );
  }
}
