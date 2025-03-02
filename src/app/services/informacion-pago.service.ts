import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InformacionPago} from '../core/models/InformacionPago';

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

  public postInformacionPago(informacionPago: InformacionPago){
    return this.httpClient.post(`${this.baseURL}/api/payments`, informacionPago, {headers: this.options});
  }
}
