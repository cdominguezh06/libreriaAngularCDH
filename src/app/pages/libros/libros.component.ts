import {Component, OnInit} from '@angular/core';
import {LibrosService} from '../../services/libros.service';
import {Libro} from '../../core/models/libro';
import {Router} from '@angular/router';
import {User} from '../../core/models/user';
@Component({
  selector: 'app-libros',
  standalone: false,

  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{
  misLibros : Libro[] = [];
  constructor(private librosService: LibrosService, private router: Router) {

  }
  ngOnInit(): void {
    this.librosService.getLibros().subscribe((libros:any) => {
      this.misLibros = libros;
    });
  }

  getPortada(libro: Libro) {
    if(!libro.imgName.includes(".jpg") && !libro.imgName.includes(".png")){
      return `assets/iconos/libro.png`;
    }
    if(libro.imgName.includes("http")){
      return libro.imgName;
    }

    return `assets/portadas/${libro.imgName}`;
  }

  eliminarLibro() {
    console.log('Deleting Libro:', Libro.getSelected());
    this.librosService.deleteLibro(Libro.getSelected()).subscribe(
      (response) => {
        console.log(response);
        window.alert("El libro " +Libro.getSelected().nombre + " ha sido eliminado con exito");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/main/libros'])});
      }
    );
  }

  setSelection(libro: Libro) {
    Libro.selectedOnce = true;
    Libro.setSelected(libro);
    console.log('Selected Libro:', Libro.getSelected());
  }

  protected readonly User = User;
  protected readonly Libro = Libro;
}
