import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumComponent } from './bread-crum/bread-crum.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DockModule} from 'primeng/dock';
import { UserfooterComponent } from './userfooter/userfooter.component';
import { ReusecardComponent } from './reusecard/reusecard.component';
import {CardModule} from "primeng/card";
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { ReuseformComponent } from './reuseform/reuseform.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    BreadCrumComponent,
    BarraNavegacionComponent,
    UserfooterComponent,
    ReusecardComponent,
    ReuseformComponent
  ],
  exports: [
    BreadCrumComponent,
    BarraNavegacionComponent,
    UserfooterComponent,
    ReusecardComponent,
    ReuseformComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadcrumbModule,
    DockModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule
  ]
})
export class SharedModule { }
