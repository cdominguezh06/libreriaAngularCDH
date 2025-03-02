import { Component } from '@angular/core';
import {User} from "../core/models/user";
@Component({
  selector: 'app-pages',
  standalone: false,

  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

    protected readonly User = User;
}
