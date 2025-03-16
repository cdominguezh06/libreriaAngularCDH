import {Component, OnInit} from '@angular/core';
import {User} from '../../core/models/user';
import {BuyOrder} from '../../core/models/buyOrder';
import {Libro} from '../../core/models/libro';
import {BuyOrderItem} from '../../core/models/BuyOrderItem';
import {BuyorderService} from '../../services/buyorder.service';

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  protected readonly User = User;
  protected readonly BuyOrder = BuyOrder;

  constructor(private buyOrderService: BuyorderService) {

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

  pagar() {
    let buyOrder = new BuyOrder(BuyOrderItem.getCarrito(), User.getLoggedUser());
    console.log(buyOrder);
    this.buyOrderService.postBuyorder(buyOrder).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem('carrito', JSON.stringify([]));
      },
      err => {
        console.log(err);
      });
  }

  protected readonly CarritoItem = BuyOrderItem;

  calcularTotal() {
    let total = 0;
    for (let item of BuyOrderItem.getCarrito()){
      total += item.libro.precio * item.cantidad;
    }
    return total;
  }
}
