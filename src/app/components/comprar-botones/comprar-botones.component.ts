import {Component, Input, OnChanges} from '@angular/core';
import {BuyOrder} from '../../core/models/buyOrder';
import {Libro} from '../../core/models/libro';
import {BuyOrderItem} from '../../core/models/BuyOrderItem';

@Component({
  selector: 'app-comprar-botones',
  standalone: false,

  templateUrl: './comprar-botones.component.html',
  styleUrl: './comprar-botones.component.css'
})
export class ComprarBotonesComponent {

  @Input() libro: Libro = {} as Libro;
  libros: Libro[] = [];

  cambiarCantidad() {
    BuyOrderItem.addtoCarrito(this.libro);
  }

  protected readonly BuyOrder = BuyOrder;

  isSobrepasado() {
    let retorno = false;
    for (let item of BuyOrderItem.getCarrito()){
      if (item.libro && this.libro && item.libro.ISBN === this.libro.ISBN) {
        if (item.cantidad >= this.libro.cantidad) {
          retorno = true;
        }
      }
    }
    return retorno;
  }
}
