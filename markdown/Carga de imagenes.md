# Cargar imagenes local/internet en nuestra libreria de Angular
HTML permite cargar imagenes tanto especificandole una ruta local como especificandole la URL de una imagenç

En este caso, mi componente *nuevo-libro-component* comprueba constantemente el campo de texto dedicado
a la imagen para mostrarla en tiempo real. 
Para ello, se usa un método asíncrono (buuh, hilos 👻) que mediante un *Promise* (buuuh, *Futures* de Java 👻)
devuelve True si puede cargar una imagen a partir del String introducido y False en caso contrario

#### UpdateImage (llamado por el campo donde se introduce la imagen)
```typescript
async updateImage($event: Event) {
    if (event == null) {
      this.displayedImage = 'assets/iconos/libro.png';
      return;
    }
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const isValidImage = await this.validateImageUrl(inputValue); // Método asíncrono
    if (isValidImage) {
      this.displayedImage = inputValue;
    } else {
      this.displayedImage = 'assets/iconos/libro.png';
    }
  }
```

#### validateImageUrl (método asíncrono que devuelve un Promise)
```typescript
validateImageUrl(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }
```

#### HTML
```html
<!-- Campo de texto para la imagen -->
<div class="form-group">
  <label for="imagen">Imagen</label>
  <input type="text" class="form-control" id="imagen" name="imagen" (input)="updateImage($event)">
</div>

<!-- Imagen que se muestra en tiempo real -->
<div class="form-group">
  <img [src]="displayedImage" alt="IMG" class="img__preview">
</div>
```

# Componente *libros-component*
Este componente se encarga de mostrar todos los libros que tenemos en nuestra librería. En mi caso, los libros que inserté manualmente
cargan una portada almacenada en local, pero un usuario que inserte un libro no podrá hacerlo y dependerá de usar links a imagenes de internet
Para validar que el campo de imagen es una imagen válida se utiliza el siguiente método:
```typescript
  getPortada(libro: Libro) {
    if(!libro.imgName.includes(".jpg") && !libro.imgName.includes(".png")){
      return `assets/iconos/libro.png`;
    }
    if(libro.imgName.includes("http")){
      return libro.imgName;
    }

    return `assets/portadas/${libro.imgName}`;
  }
```

```html
<!-- Mostramos la portada del libro -->
<div class="card_v" *ngFor="let libro of misLibros">
  <p-card>
    <ng-template pTemplate="header">
      <img [src]="getPortada(libro)" class="portada">
      <br>
<!-- Resto del código -->
```
