import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraCierreComponent } from './barra-cierre/barra-cierre.component';
import { NuevoBotonComponent } from './nuevo-boton/nuevo-boton.component';
import {ButtonDirective} from 'primeng/button';
import {RouterLink} from '@angular/router';
import { ModificarBotonComponent } from './modificar-boton/modificar-boton.component';
import { EliminarBotonComponent } from './eliminar-boton/eliminar-boton.component';



@NgModule({
  declarations: [
    BarraCierreComponent,
    NuevoBotonComponent,
    ModificarBotonComponent,
    EliminarBotonComponent
  ],
  imports: [
    CommonModule,
    ButtonDirective,
    RouterLink
  ],
  exports: [
    BarraCierreComponent,
    NuevoBotonComponent,
    ModificarBotonComponent,
    EliminarBotonComponent
  ]
})
export class ComponentsModule { }
