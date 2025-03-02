import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map, Subscription} from 'rxjs';
import {User} from '../../core/models/user';


@Component({
  selector: 'app-bread-crum',
  standalone: false,

  templateUrl: './bread-crum.component.html',
  styleUrl: './bread-crum.component.css'
})
export class BreadCrumComponent implements OnInit, OnDestroy{
  items: MenuItem[] = [];
  home: MenuItem = {icon: 'pi pi-home', routerLink: '/'};
  titleSub$: Subscription

  constructor(private router: Router) {
    this.titleSub$ = this.getDataRouter().subscribe(
      ({title})=>{
        this.items = [];
        this.items.push({label: title});
      }
    );
  }

  private getDataRouter() {
    return this.router.events.pipe(
      filter((e: any) => e instanceof ActivationEnd),
      filter((e: ActivationEnd) => e.snapshot.firstChild === null),
      map((e: ActivationEnd) => e.snapshot.data)
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

  protected readonly User = User;
}
