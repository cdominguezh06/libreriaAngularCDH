import {Component} from '@angular/core';
import {User, UserRole} from '../../core/models/user';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: false,

  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  user: User = {} as User;
  errorMessage: string = '';

  constructor(private usersService: UsersService, private router: Router) {

  }

  guardarMetodo($event: Record<string, any>) {
    const {nombre, apellidos, email, username, password} = $event;
    this.user.username = username;
    this.user.password = password;
    this.user.email = email;
    this.user.nombre = nombre;
    this.user.apellidos = apellidos;
    this.user.role = UserRole.CLIENT;
    console.log(this.user)
    this.usersService.register(this.user).subscribe({
      next: () => {
        this.router.navigate(['/main']);
      },
      error: (err) => {
        this.errorMessage = 'Error al registrarse: ' + (err.error?.message || 'Datos inválidos');
      }
    });
  }

  protected readonly User = User;
}
