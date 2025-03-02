import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {User} from '../../core/models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.formulario = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public iniciarSesion() {
    console.log(this.formulario.value);
    const user: User = new User(this.formulario.value.username, this.formulario.value.password);
    console.log(user);
    this.loginService.login(user);
    if (user.username != '' && user.password != '') {
      alert("Sesion iniciada correctamente");
      this.router.navigate(['/main']);
    }
  }
}
