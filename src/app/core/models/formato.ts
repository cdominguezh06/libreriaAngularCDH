export class Formato {
  id: number;
  nombre: string;
  static #selected: Formato;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  public static getSelected(): Formato {
    return this.#selected;
  }

  public static setSelected(value: Formato) {
    this.#selected = value;
  }
}
