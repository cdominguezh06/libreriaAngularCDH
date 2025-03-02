export class Autor {
  id: number;
  nombre: string;
  static #selected : Autor;
  static selectedOnce : boolean = false;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  public static getSelected(): Autor {
    return this.#selected;
  }

  public static setSelected(autor: Autor): void {
    this.#selected = autor;
  }
}
