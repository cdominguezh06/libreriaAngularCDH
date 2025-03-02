export class Temas {
  id: number;
  nombre: string;

  static #selected : Temas;
  static selectedOnce : boolean = false;
  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  static setSelected(tema: Temas) {
    this.#selected = tema;
  }

  static getSelected() {
    return this.#selected;
  }
}
