import {Component, Input} from '@angular/core';
import {Libro} from '../../core/models/libro';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-eliminar-boton',
  standalone: false,

  templateUrl: './eliminar-boton.component.html',
  styleUrl: './eliminar-boton.component.css'
})
export class EliminarBotonComponent {

  protected readonly Libro = Libro;
  protected readonly User = User;
  @Input() routerLink: String[] = [];
  @Input() label: string = "";
  @Input() mostrarSi: boolean = false;
}
