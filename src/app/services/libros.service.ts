import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Libro} from '../core/models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  public getLibros() {
    return this.httpClient.get<Libro[]>(`${this.baseURL}/api/libros`, {headers: this.options});
  }

  public postLibro(libro: Libro) {
    return this.httpClient.post<Libro>(`${this.baseURL}/api/libros`, libro, {headers: this.options});
  }

  deleteLibro(libro: Libro) {
    return this.httpClient.delete<Libro>(`${this.baseURL}/api/libros?ISBN=${libro.ISBN}`, {headers: this.options});

  }

  putLibro(libro: Libro) {
    return this.httpClient.put<Libro>(`${this.baseURL}/api/libros`, libro, {headers: this.options});
  }
}
