import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IDocument } from 'src/app/data/document';
import { Pagination } from 'src/app/data/pagination';
import { DocumentService } from 'src/app/services/document-service';

@Component({
  selector: 'app-teaching-material-lite',
  templateUrl: './teaching-material-lite.component.html',
  styleUrls: ['./teaching-material-lite.component.scss']
})
export class TeachingMaterialLiteComponent implements OnInit {
  documentList!: Pagination<IDocument>;
  isDown = false;
  startX: any;
  scrollLeft: any;
  constructor(public router: Router, private documentService: DocumentService ) {}

  ngOnInit(): void {
    this.getLiteDocuments();
    
  }
  

  redirectToList(){
    this.router.navigate(["/teaching-list"])
  }

  getLiteDocuments(){
    this.documentService.get()
    .subscribe(
        (result) => {
          this.documentList = result;
        }
    );
  }

}
