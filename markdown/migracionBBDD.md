# Migrar la base de datos desde XAMPP hacia MySQL Workbench

## 1. Exportar la base de datos desde XAMPP

1. Abrir XAMPP y asegurarse de que Apache y MySQL están activos.
2. Acceder a `http://localhost/phpmyadmin/`.
3. Seleccionar la base de datos que se quiere exportar.
4. Hacer clic en `Exportar`.
5. En el apartado `Formato`, seleccionar `SQL`.
6. Hacer clic en `Exportar`.
7. Guardar el archivo `.sql` en una ubicación accesible.
8. Cerrar XAMPP.

## 2. Importar la base de datos en MySQL Workbench

1. Abrir MySQL Workbench.
2. Hacer clic en `Server` > `Data Import`.
3. Seleccionar `Import from Self-Contained File`.
4. Hacer clic en `...` y seleccionar el archivo `.sql` exportado.
5. Hacer clic en `Start Import`.
6. Esperar a que se complete la importación.

## 3. Configurar la conexión a la base de datos
En nuestra API en C# tendremos que cambiar la clase *getConnectionDAO* para reflejar la nueva conexión a la base de datos.
```csharp
protected GetConnectionDAO() {
			try {

				accessMySql = DAO.getInstance("apirest", "root", "root"); //Los datos de la conexion que tenemos en MySQL Workbench y la base de datos que vamos a usar
				connection = accessMySql.getConnection();

			}catch(Exception ex) {}
		}
```


