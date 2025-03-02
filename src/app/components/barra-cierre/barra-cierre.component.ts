import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-barra-cierre',
  standalone: false,

  templateUrl: './barra-cierre.component.html',
  styleUrl: './barra-cierre.component.css'
})
export class BarraCierreComponent {
  @Input() anchura: string = "100%";

  constructor(private router: Router) {

  }

  navigateToMain() {
    this.router.navigateByUrl("/")
  }
}
