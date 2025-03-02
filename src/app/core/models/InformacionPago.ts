export class InformacionPago{
  numeroTarjeta: string;
  fechaExpiracion: string;
  cvv: string;
  nombreTitular: string;


  constructor() {
    this.numeroTarjeta = "";
    this.fechaExpiracion = "";
    this.cvv = "";
    this.nombreTitular = "";
  }

  public getJSON() : Record<string, any> {
    return {
      numeroTarjeta: this.numeroTarjeta,
      fechaExpiracion: this.fechaExpiracion,
      cvv: this.cvv,
      nombreTitular: this.nombreTitular
    };
  }
}
