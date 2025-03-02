import {Component, OnInit} from '@angular/core';
import {Autor} from '../../core/models/autor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutoresService} from '../../services/autores.service';

@Component({
  selector: 'app-editar-autor',
  standalone: false,

  templateUrl: './editar-autor.component.html',
  styleUrl: './editar-autor.component.css'
})
export class EditarAutorComponent implements OnInit {
  autorFormulario: FormGroup;
  autores : Autor[] = [];
  constructor(private fb: FormBuilder, private autorService: AutoresService) {
    this.autorFormulario = this.fb.group({
      id : ['', Validators.required],
      nombre: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.autorFormulario.patchValue(
      {
        id: Autor.getSelected().id,
        nombre: Autor.getSelected().nombre
      });
  }

  modificarAutor() {
    console.log(this.autorFormulario.value);
    this.autorService.putAutor(this.autorFormulario.value).subscribe(
      (response) => {
        console.log(response);
        window.alert("El autor " +this.autorFormulario.value.nombre + " ha sido guardado con exito");
      }
    );
  }
}
