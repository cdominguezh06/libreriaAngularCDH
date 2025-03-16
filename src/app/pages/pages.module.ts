import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from "./pages.component";
import {LibrosComponent} from "./libros/libros.component";
import {AutoresComponent} from "./autores/autores.component";
import {TemasComponent} from "./temas/temas.component";
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ComponentsModule} from '../components/components.module';
import {CardModule} from 'primeng/card';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';
import {ButtonDirective} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipsModule} from 'primeng/chips';
import {DropdownModule} from 'primeng/dropdown';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NuevoAutorComponent } from './nuevo-autor/nuevo-autor.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { EditarAutorComponent } from './editar-autor/editar-autor.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { MeComponent } from './me/me.component';
import { NuevoMetodoComponent } from './nuevo-metodo/nuevo-metodo.component';
import { CartComponent } from './cart/cart.component';
import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [PagesComponent, LibrosComponent, AutoresComponent, TemasComponent, NuevoLibroComponent, NuevoAutorComponent, EditarLibroComponent, EditarAutorComponent, LoginComponent, SigninComponent, MeComponent, NuevoMetodoComponent, CartComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    CardModule,
    ButtonDirective,
    FormsModule,
    ReactiveFormsModule,
    ChipsModule,
    DropdownModule,
    NoopAnimationsModule,
    TableModule
  ],
})
export class PagesModule {
}
