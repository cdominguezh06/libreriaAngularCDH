import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Libro} from '../core/models/libro';
import {Autor} from '../core/models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) {
  }
  public getAutores(){
    return this.httpClient.get<Autor[]>(`${this.baseURL}/api/autores`, {headers: this.options});
  }

  public postAutor(autor: Autor) {
    return this.httpClient.post<Autor>(`${this.baseURL}/api/autores`, autor, {headers: this.options});
  }

  public putAutor(autor: Autor) {
    return this.httpClient.put<Autor>(`${this.baseURL}/api/autores`, autor, {headers: this.options});
  }

  public deleteAutor(id: number) {

  }
}
