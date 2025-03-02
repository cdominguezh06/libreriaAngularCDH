export class Edicion {
  id: number;
  nombre: string;
  static #selected : Edicion;


  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  public static getSelected(): Edicion {
    return this.#selected;
  }

  public static setSelected(value: Edicion) {
    this.#selected = value;
  }
}
