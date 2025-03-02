import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibrosComponent} from './libros/libros.component';
import {PagesComponent} from './pages.component';
import {TemasComponent} from './temas/temas.component';
import {AutoresComponent} from './autores/autores.component';
import {NuevoLibroComponent} from './nuevo-libro/nuevo-libro.component';
import {NuevoAutorComponent} from './nuevo-autor/nuevo-autor.component';
import {EditarLibroComponent} from './editar-libro/editar-libro.component';
import {LoginComponent} from './login/login.component';
import {EditarAutorComponent} from './editar-autor/editar-autor.component';
import {MeComponent} from './me/me.component';
import {NuevoMetodoComponent} from './nuevo-metodo/nuevo-metodo.component';

const routes: Routes = [
  {
    path: 'main', component: PagesComponent, children: [
      {path: 'libros', component: LibrosComponent, data: {title: 'Libros'}},
      {path: 'temas', component: TemasComponent, data: {title: 'Temas'}},
      {path: 'autores', component: AutoresComponent, data: {title: 'Autores'}},
      {path: 'nuevo-libro', component: NuevoLibroComponent, data: {title: 'Nuevo Libro'}},
      {path: 'nuevo-autor', component: NuevoAutorComponent, data: {title: 'Nuevo Autor'}},
      {path: 'modificar-autor' , component: EditarAutorComponent, data: {title: 'Modificar Autor'}},
      {path: 'modificar-libro' , component: EditarLibroComponent, data: {title: 'Modificar Libro'}},
      {path: 'nuevo-metodo' , component: NuevoMetodoComponent, data: {title: 'Nuevo metodo'}},
      {path: 'login', component: LoginComponent, data: {title: 'Login'}},
      {path: 'me', component: MeComponent, data: {title: 'Me'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
