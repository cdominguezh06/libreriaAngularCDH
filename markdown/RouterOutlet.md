# Error NG8001: 'router-outlet' is not a known element:
- Motivo: No se encuentra el router outlet en la plantilla HTML de *PagesComponent*, aunque tengas *RouterModule* importado
- Solucion: Importar *PagesModule* en *AppModule*
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PagesModule // Agregar PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
