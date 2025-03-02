import {Autor} from './autor';
import {Temas} from './temas';
import {Edicion} from './edicion';
import {Formato} from './formato';

export class Libro {
  nombre: string;
  ISBN: string;
  imgName: string;
  autor: Autor;
  tema: Temas;
  precio: number;
  edicion: Edicion;
  formato: Formato;
  cantidad: number;

  static #selected : Libro = {} as Libro;
  static selectedOnce : boolean = false;
  constructor(nombre: string, ISBN: string, imgName: string, autor: Autor, tema: Temas, precio: number, edicion: Edicion, formato: Formato, cantidad: number) {
    this.nombre = nombre;
    this.ISBN = ISBN;
    this.imgName = imgName;
    this.autor = autor;
    this.tema = tema;
    this.precio = precio;
    this.edicion = edicion;
    this.formato = formato;
    this.cantidad = cantidad;
  }

  public static getSelected(): Libro {
    return this.#selected;
  }

  public static setSelected(libro: Libro): void {
    this.#selected = libro;
  }
}
