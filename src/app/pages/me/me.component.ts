import {Component, OnInit} from '@angular/core';
import {User} from '../../core/models/user';
import {InformacionPago} from '../../core/models/InformacionPago';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-me',
  standalone: false,

  templateUrl: './me.component.html',
  styleUrl: './me.component.css'
})
export class MeComponent implements OnInit{

  protected readonly User = User;
  protected informacionesPago: InformacionPago[] = [];

  constructor(private userService : UsersService) {
  }

  ngOnInit(): void {
    this.userService.getInformacionPagoByUser(User.getLoggedUser()).subscribe((informacionesPago:any) => {
      this.informacionesPago = informacionesPago;
    });
  }

}
