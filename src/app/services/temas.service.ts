import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Libro} from '../core/models/libro';
import {Temas} from '../core/models/temas';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) {
  }
  public getTemas(){
    return this.httpClient.get<Temas[]>(`${this.baseURL}/api/temas`, {headers: this.options});
  }

  public deleteTema(id: number) {
    return this.httpClient.delete(`${this.baseURL}/api/temas/${id}`, {headers: this.options});
  }
}
