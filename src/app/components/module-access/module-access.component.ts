import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-access',
  templateUrl: './module-access.component.html',
  styleUrls: ['./module-access.component.scss']
})
export class ModuleAccessComponent {
  @Input() name = "";
  @Input() color = "";
  @Input() path = "assets/data-not-found.svg";


}
