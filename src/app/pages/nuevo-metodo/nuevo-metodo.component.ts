import { Component } from '@angular/core';
import {InformacionPago} from '../../core/models/InformacionPago';
import {InformacionPagoService} from '../../services/informacion-pago.service';

@Component({
  selector: 'app-nuevo-metodo',
  standalone: false,

  templateUrl: './nuevo-metodo.component.html',
  styleUrl: './nuevo-metodo.component.css'
})
export class NuevoMetodoComponent {
  toSave : InformacionPago = new InformacionPago();


  constructor(private informacionPagoService: InformacionPagoService) {
    console.log(this.toSave.getJSON())
  }

  guardarMetodo($event: Record<string, any>) {
    const {numeroTarjeta, fechaExpiracion, cvv, nombreTitular} = $event;
    this.toSave.numeroTarjeta = numeroTarjeta;
    this.toSave.fechaExpiracion = fechaExpiracion;
    this.toSave.cvv = cvv;
    this.toSave.nombreTitular = nombreTitular;
    console.log(this.toSave);
    this.informacionPagoService.postInformacionPago(this.toSave).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });
  }
}
