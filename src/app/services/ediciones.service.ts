import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Libro} from '../core/models/libro';
import {Edicion} from '../core/models/edicion';

@Injectable({
  providedIn: 'root'
})
export class EdicionesService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) {
  }
  public getEdiciones(){
    return this.httpClient.get<Edicion[]>(`${this.baseURL}/api/ediciones`, {headers: this.options});
  }
}
