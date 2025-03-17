import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../core/models/user";

@Component({
  selector: 'app-nuevo-boton',
  standalone: false,

  templateUrl: './nuevo-boton.component.html',
  styleUrl: './nuevo-boton.component.css'
})
export class NuevoBotonComponent implements OnInit{

  protected readonly User = User;
  @Input() routerLink: String[]=[];
  @Input() label: string="";
  @Input() ifcondition: boolean = User.isAdmin();

  constructor() {
  }

  ngOnInit(): void {
  }
}
