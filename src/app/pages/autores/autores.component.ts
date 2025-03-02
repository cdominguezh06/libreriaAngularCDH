import {Component, OnInit} from '@angular/core';
import {Autor} from '../../core/models/autor';
import {AutoresService} from '../../services/autores.service';
import {User} from "../../core/models/user";

@Component({
  selector: 'app-autores',
  standalone: false,

  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})
export class AutoresComponent implements OnInit{
  misAutores: Autor[] = [];

  constructor(private autoresService: AutoresService) {

  }

  ngOnInit(): void {
    this.autoresService.getAutores().subscribe((autores:any) => {
      this.misAutores = autores;
    });
  }

  setSelection(autor: Autor) {
    Autor.selectedOnce = true;
    Autor.setSelected(autor);
    console.log('Selected Autor:', Autor.getSelected());
  }

  protected readonly User = User;

  eliminarAutor() {
    this.autoresService.deleteAutor(Autor.getSelected().id)
  }

  protected readonly Autor = Autor;
}
