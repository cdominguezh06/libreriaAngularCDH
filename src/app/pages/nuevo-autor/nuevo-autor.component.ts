import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Autor} from '../../core/models/autor';
import {AutoresService} from '../../services/autores.service';

@Component({
  selector: 'app-nuevo-autor',
  standalone: false,

  templateUrl: './nuevo-autor.component.html',
  styleUrl: './nuevo-autor.component.css'
})
export class NuevoAutorComponent {
  autorFormulario: FormGroup;

  autores : Autor[] = [];
  constructor(private fb: FormBuilder, private autorService: AutoresService) {
    this.autorFormulario = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  guardarAutor() {
    this.autorService.postAutor(this.autorFormulario.value).subscribe(
      (response) => {
        console.log(response);
        window.alert("El autor " +this.autorFormulario.value.nombre + " ha sido guardado con exito");
      }
    );
  }
}
