# Para coger una imagen según el nombre que hay en la BBDD:
### LibrosComponent
```typescript
  getPortada(libro: Libro) {
    if(libro.imgName.includes(".png")){
      return `assets/portadas/${libro.imgName}`;
    }
    return `assets/iconos/libro.png`;
  }
```
### HTML
```html
<!-- ... -->
<div class="card_v" *ngFor="let libro of misLibros">
      <p-card>
        <ng-template pTemplate="header">
          <img [src]="getPortada(libro)" class="portada">
<!-- ... -->
```
