# Error: LA API NO VA
- Motivo: Hay que iniciar el Xampp

Si tratamos de iniciar directamente el XAMPP seguramente nos encontraremos con esto
```
10:38:21  [mysql] 	Problem detected!
10:38:21  [mysql] 	Port 3306 in use by "Unable to open process"!
10:38:21  [mysql] 	MySQL WILL NOT start without the configured ports free!
10:38:21  [mysql] 	You need to uninstall/disable/reconfigure the blocking application
10:38:21  [mysql] 	or reconfigure MySQL and the Control Panel to listen on a different port
```
Esto ocurre porque el maravilloso SQL Server que usamos con Jose peta y ocupa el puerto 3306, que es el de MySql

1. Matamos el servicio del SQL Server ese que no sirve pa' na'. Abrimos PowerShell con permisos de administrador
```powershell
net stop MySQL80 
```

2. Abrimos el XAMPP e iniciamos tanto Apache como MySQL

3. Dejamos EXACTAMENTE las clases de C# asi:
   - Clase WebApiConfig
```csharp
 public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
            //...
```
  - Clase LibroController
```csharp
[RoutePrefix("api/libro")]
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class LibroController : ApiController {
```
