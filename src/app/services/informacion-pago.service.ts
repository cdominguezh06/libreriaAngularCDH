import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InformacionPago} from '../core/models/InformacionPago';
import {User} from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class InformacionPagoService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient : HttpClient) { }

  public getInformacionPagoU(){
    return this.httpClient.get<InformacionPago[]>(`${this.baseURL}/api/payments`, {headers: this.options});
  }

  public postInformacionPago(informacionPago: InformacionPago) {
    this.httpClient.post(`${this.baseURL}/api/payments`, informacionPago, {headers: this.options});
    return this.httpClient.post(this.baseURL+"/api/users/"+User.getLoggedUser().username+"/payments/"+informacionPago.numeroTarjeta, informacionPago.getJSON(), {headers: this.options})
  }
}
