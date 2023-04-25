import { Component, Input } from '@angular/core';
import { IDocument } from 'src/app/data/document';

@Component({
  selector: 'app-teaching-material-single',
  templateUrl: './teaching-material-single.component.html',
  styleUrls: ['./teaching-material-single.component.scss']
})
export class TeachingMaterialSingleComponent {
  @Input() document!:IDocument;
  @Input() pages :number = 0;

}
