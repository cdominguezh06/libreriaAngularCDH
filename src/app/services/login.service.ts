import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) {
  }

  public login(user : User){
    return this.httpClient.post<User>(`${this.baseURL}/api/users/login`, user, {headers: this.options}).subscribe(
      (user) => {
        User.setLoggedUser(user);
        alert("Sesion iniciada correctamente");
        console.log(User.getLoggedUser());
      }
    );
  }

}
