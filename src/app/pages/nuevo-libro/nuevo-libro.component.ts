import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutoresService} from '../../services/autores.service';
import {TemasService} from '../../services/temas.service';
import {FormatosService} from '../../services/formatos.service';
import {Autor} from '../../core/models/autor';
import {Temas} from '../../core/models/temas';
import {Formato} from '../../core/models/formato';
import {Edicion} from '../../core/models/edicion';
import {EdicionesService} from '../../services/ediciones.service';
import {LibrosService} from '../../services/libros.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nuevo-libro',
  standalone: false,

  templateUrl: './nuevo-libro.component.html',
  styleUrl: './nuevo-libro.component.css'
})
export class NuevoLibroComponent implements OnInit{

  libroFormulario: FormGroup;
  displayedImage : String = 'assets/iconos/libro.png';
  autores : Autor[] = [];
  temas : Temas[] = [];
  formatos : Formato[] = [];
  ediciones : Edicion[] = [];
  constructor(private fb: FormBuilder, private libroService : LibrosService,  private autorService: AutoresService, private temaService: TemasService
    , private formatoService: FormatosService, private edicionService: EdicionesService, private router : Router) {
    this.libroFormulario = this.fb.group({
      autor: ['', Validators.required],
      edicion: ['', Validators.required],
      formato: ['', Validators.required],
      ISBN: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: [0, Validators.required],
      tema: ['', Validators.required],
      imgName: ['', Validators.required],
      cantidad: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.autorService.getAutores().subscribe(
      (autores) => {
        this.autores = autores;
      }
    );
    this.temaService.getTemas().subscribe(
      (temas) => {
        this.temas = temas;
      }
    );
    this.formatoService.getFormatos().subscribe(
      (formatos) => {
        this.formatos = formatos;
      }
    );
    this.edicionService.getEdiciones().subscribe(
      (ediciones) => {
        this.ediciones = ediciones;
      }
    );
  }

  async updateImage($event: Event) {
    if ($event == null) {
      this.displayedImage = 'assets/iconos/libro.png';
      return;
    }
    const inputElement = $event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const isValidImage = await this.validateImageUrl(inputValue);
    if (isValidImage) {
      this.displayedImage = inputValue;
    } else {
      this.displayedImage = 'assets/iconos/libro.png';
    }
  }

  validateImageUrl(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  guardarLibro() {
    this.libroService.postLibro(this.libroFormulario.value).subscribe(
      (response) => {
        console.log(response);
        window.alert("El libro " +this.libroFormulario.value.nombre + " ha sido guardado con exito");
        this.router.navigate(['/main/libros']);
      }
    );
  }
}
