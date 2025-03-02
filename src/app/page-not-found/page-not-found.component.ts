import { Component } from '@angular/core';
import {User} from "../core/models/user";

@Component({
  selector: 'app-page-not-found',
  standalone: false,

  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

    protected readonly User = User;
}
