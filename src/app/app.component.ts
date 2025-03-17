import { Component } from '@angular/core';
import {User} from './core/models/user';
import {BuyOrder} from './core/models/buyOrder';
import {BuyOrderItem} from './core/models/BuyOrderItem';
import {LibrosComponent} from './pages/libros/libros.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libreriaAngularCDH';
  protected readonly User = User;
  public static displaySidebar: boolean = false;
  protected  readonly AppComponent = AppComponent;
  protected readonly BuyOrder = BuyOrder;

  desactivar() {
    AppComponent.displaySidebar = false;
  }

  protected readonly CarritoItem = BuyOrderItem;

  restar(elemento: string) {
    let item = BuyOrderItem.getElementoByISBN(elemento);
    if (item != null) {
      console.log(item.cantidad)
      item.cantidad = item.cantidad - 1;
      console.log(item.cantidad);
      if (item.cantidad < 1) {
        BuyOrderItem.removeElementoByISBN(elemento);
      }else {
        BuyOrderItem.updateCarrito(item);
      }
      sessionStorage.removeItem('carrito');
      sessionStorage.setItem('carrito', JSON.stringify(BuyOrderItem.getCarrito()));
    }
  }

  sumar(elemento: string) {
    let item = BuyOrderItem.getElementoByISBN(elemento);
    if (item != null) {
      console.log(item.cantidad)
      item.cantidad = item.cantidad + 1;
      console.log(item.cantidad);
        BuyOrderItem.updateCarrito(item);
      }
      sessionStorage.removeItem('carrito');
      sessionStorage.setItem('carrito', JSON.stringify(BuyOrderItem.getCarrito()));
    }

  isCantidadSuperada(elemento: string, cantidad: number): boolean {
    let item = LibrosComponent.getLibroByISBN(elemento);
    if (item != null) {
      return cantidad>=item.cantidad;
    }
    return false;
  }
}
