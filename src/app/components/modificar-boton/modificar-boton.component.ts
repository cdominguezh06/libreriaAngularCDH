import {Component, Input} from '@angular/core';
import {User} from "../../core/models/user";
import {Libro} from '../../core/models/libro';

@Component({
  selector: 'app-modificar-boton',
  standalone: false,

  templateUrl: './modificar-boton.component.html',
  styleUrl: './modificar-boton.component.css'
})
export class ModificarBotonComponent {

  protected readonly User = User;
  @Input() routerLink: String[] = [];
  @Input() label: string = "";
  protected readonly Libro = Libro;
  @Input() mostrarSi: boolean = false;
}
