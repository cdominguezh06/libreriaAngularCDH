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
  static misLibros : Libro[] = [];
  constructor(private librosService: LibrosService, private router: Router) {

  }
  ngOnInit(): void {
    this.librosService.getLibros().subscribe((libros:any) => {
      LibrosComponent.misLibros = libros;
    });
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

  static getLibroByISBN(elemento: string) {
    for (let i = 0; i <  LibrosComponent.misLibros.length; i++) {
      if (LibrosComponent.misLibros[i].ISBN == elemento) {
        return LibrosComponent.misLibros[i];
      }
    }
    return null;
  }
  protected readonly User = User;
  protected readonly Libro = Libro;
  protected readonly LibrosComponent = LibrosComponent;
}
