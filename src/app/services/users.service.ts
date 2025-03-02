import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {InformacionPago} from '../core/models/InformacionPago';
import {User} from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient : HttpClient) { }

  public getInformacionPagoByUser(user : User){
    return this.httpClient.get<InformacionPago[]>(`${this.baseURL}/api/users/`+user.username+'/payments', {headers: this.options});
  }
}
