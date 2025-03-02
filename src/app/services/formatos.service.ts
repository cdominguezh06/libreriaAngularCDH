import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Libro} from '../core/models/libro';
import {Formato} from '../core/models/formato';

@Injectable({
  providedIn: 'root'
})
export class FormatosService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) {
  }
  public getFormatos(){
    return this.httpClient.get<Formato[]>(`${this.baseURL}/api/formatos`, {headers: this.options});
  }
}
