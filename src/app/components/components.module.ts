import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraCierreComponent } from './barra-cierre/barra-cierre.component';
import { NuevoBotonComponent } from './nuevo-boton/nuevo-boton.component';
import {Button, ButtonDirective} from 'primeng/button';
import {RouterLink} from '@angular/router';
import { ModificarBotonComponent } from './modificar-boton/modificar-boton.component';
import { EliminarBotonComponent } from './eliminar-boton/eliminar-boton.component';
import { ComprarBotonesComponent } from './comprar-botones/comprar-botones.component';
import { LibroCardComponent } from './libro-card/libro-card.component';
import {CardModule} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';



@NgModule({
  declarations: [
    BarraCierreComponent,
    NuevoBotonComponent,
    ModificarBotonComponent,
    EliminarBotonComponent,
    ComprarBotonesComponent,
    LibroCardComponent
  ],
  imports: [
    CommonModule,
    ButtonDirective,
    RouterLink,
    Button,
    CardModule,
    PrimeTemplate
  ],
  exports: [
    BarraCierreComponent,
    NuevoBotonComponent,
    ModificarBotonComponent,
    EliminarBotonComponent,
    ComprarBotonesComponent,
    LibroCardComponent
  ]
})
export class ComponentsModule { }
