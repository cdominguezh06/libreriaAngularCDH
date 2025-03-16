import {Component, Input} from '@angular/core';
import {Libro} from '../../core/models/libro';

@Component({
  selector: 'app-libro-card',
  standalone: false,

  templateUrl: './libro-card.component.html',
  styleUrl: './libro-card.component.css'
})
export class LibroCardComponent {
  @Input() libro: Libro = {} as Libro;
  @Input() showButtons: boolean = true;

  getPortada(libro: Libro) {
    if(!libro.imgName.includes(".jpg") && !libro.imgName.includes(".png")){
      return `assets/iconos/libro.png`;
    }
    if(libro.imgName.includes("http")){
      return libro.imgName;
    }

    return `assets/portadas/${libro.imgName}`;
  }
}
