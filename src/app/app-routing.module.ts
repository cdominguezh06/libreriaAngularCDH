import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PagesRoutingModule} from './pages/pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {MeComponent} from './pages/me/me.component';

const routes: Routes = [
  {path: "", redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: PagesComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
