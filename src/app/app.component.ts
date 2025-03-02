import { Component } from '@angular/core';
import {User} from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libreriaAngularCDH';
  protected readonly User = User;
}
