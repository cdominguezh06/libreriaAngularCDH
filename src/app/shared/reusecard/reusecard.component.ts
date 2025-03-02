import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-reusecard',
  standalone: false,

  templateUrl: './reusecard.component.html',
  styleUrl: './reusecard.component.css'
})
export class ReusecardComponent {
  @Input() iterable: Record<string, any> = {};
  @Input() width : string = "auto";
  @Input() height : string = "auto";
}
