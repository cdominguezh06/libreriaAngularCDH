import { Component } from '@angular/core';
import {User} from "../../core/models/user";
import {Router} from "@angular/router";
@Component({
  selector: 'app-userfooter',
  standalone: false,

  templateUrl: './userfooter.component.html',
  styleUrl: './userfooter.component.css'
})
export class UserfooterComponent {
    protected readonly User = User;


  constructor(private router : Router) {
    console.log(User.isLogged());
  }

  public login(){
    this.router.navigate(['/main/login']);
  }

  public logout() {
    User.logout();
    this.router.navigate(['/main']);
  }

  public goToUserZone() {
    this.router.navigate(['/main/me']);
  }
}
