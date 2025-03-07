import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';
import {provideHttpClient} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from './components/components.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PagesModule,
    SharedModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
