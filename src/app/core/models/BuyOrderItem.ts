import {Libro} from './libro';

export class BuyOrderItem {
  public libro: Libro = {} as Libro;
  public cantidad: number = 0;

  constructor(libro: Libro, cantidad: number) {
    this.libro = libro;
    this.cantidad = cantidad;
  }

  private static carrito: BuyOrderItem[] = []

  static getIterable() {
    let iterable: { ISBN: string; Nombre: string; cantidad: number; }[] = [];
    this.carrito.forEach(element => {
      iterable.push({ISBN: element.libro.ISBN, Nombre: element.libro.nombre, cantidad: element.cantidad});
    });
    return iterable;
  }

  static getElementoByISBN(ISBN: string) {
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].libro.ISBN == ISBN) {
        return this.carrito[i];
      }
    }
    return null;
  }

  static getCarrito(): BuyOrderItem[] {
    const parse: BuyOrderItem[] = JSON.parse(<string>sessionStorage.getItem('carrito'));
    if (parse == null) {
      console.log("Es nulo")
      sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
      return this.carrito;
    }
    this.carrito = parse;
    return this.carrito;
  }

  static addtoCarrito(libro: Libro) {
    this.carrito = this.getCarrito()
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].libro.ISBN == libro.ISBN) {
        this.carrito[i].cantidad++;
        console.log(this.carrito);
        sessionStorage.removeItem('carrito');
        sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
        return;
      }
    }
    this.carrito.push(new BuyOrderItem(libro, 1));
    console.log(this.carrito);
    sessionStorage.removeItem('carrito');
    sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  static removeElementoByISBN(elemento: string) {
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].libro.ISBN == elemento) {
        this.carrito.splice(i, 1);
        sessionStorage.removeItem('carrito');
        sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
        return;
      }
    }
  }

  static updateCarrito(item: BuyOrderItem) {
    for (let i = 0; i < this.carrito.length; i++) {
      if (this.carrito[i].libro.ISBN == item.libro.ISBN) {
        this.carrito[i] = item;
        sessionStorage.removeItem('carrito');
        sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
        return;
      }
    }
  }
}
