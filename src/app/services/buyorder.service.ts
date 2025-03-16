import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BuyOrder} from '../core/models/buyOrder';

@Injectable({
  providedIn: 'root'
})
export class BuyorderService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) {
  }

  public postBuyorder(buyorder: BuyOrder) {
    return this.httpClient.post<BuyOrder>(`${this.baseURL}/api/orders/new`, buyorder, {headers: this.options});
  }
}
