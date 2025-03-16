import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../core/models/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8080"
  private options = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public login(user : User){
    return this.httpClient.post<User>(`${this.baseURL}/api/users/login`, user, {headers: this.options}).subscribe(
      (user) => {
        User.setLoggedUser(user);
        alert("Sesion iniciada correctamente");
        this.router.navigate(['/main']);
        console.log(User.getLoggedUser());
      }
    );
  }
}
