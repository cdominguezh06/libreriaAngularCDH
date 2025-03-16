import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-barra-navegacion',
  standalone: false,

  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent implements OnInit {
  navBar: MenuItem[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.navBar =
      [{
        label: "Libros",
        icon: "assets/iconos/libro.png",
        command: () => {
          this.router.navigateByUrl('main/libros');
        }
      },
        {
          label: "Autores",
          icon: "assets/iconos/autor.png",
          command: () => {
            this.router.navigateByUrl('main/autores');
          }
        },
        {
          label: "Temas",
          icon: "assets/iconos/tema.png",
          command: () => {
            this.router.navigateByUrl('main/temas');
          }
        },
        {
          label: "Carrito",
          icon: "assets/iconos/carrito.png",
          command: () => {
            AppComponent.displaySidebar = !AppComponent.displaySidebar;
          }
        }
      ];
  }

}
