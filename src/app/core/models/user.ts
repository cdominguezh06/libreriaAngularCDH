export class User {
  username: string;
  email: string;
  nombre?: string;
  apellidos?: string;
  direccion?: DireccionUsuario;
  password: string;
  role: UserRole;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.email = "";
    this.apellidos = "";
    this.nombre = "";
    this.direccion = undefined;
    this.role = UserRole.CLIENT;
  }

  public getUsername() {
    return this.username;
  }

  public getPassword() {
    return this.password;
  }

  public static getLoggedUser(): User{
    const parse : User = JSON.parse(<string>sessionStorage.getItem('userDetails'));
    if(parse == null){
      return new User("", "");
    }
    return parse;
  }

  public static getJSON() : Record<string, any> {
    const user: string = <string>sessionStorage.getItem('userDetails');
    if (user == null) {
      return { nombre: "", apellidos: "", email: "", username: "", role: UserRole.CLIENT };
    }
    const parse = JSON.parse(user);
    return {nombre: parse.nombre, apellidos: parse.apellidos, email: parse.email, username: parse.username, role: parse.role};
  }
  public static setLoggedUser(user : User){
    sessionStorage.removeItem('userDetails');
    sessionStorage.setItem('userDetails', JSON.stringify(user));
  }

  public static isLogged() : boolean{
    const item = sessionStorage.getItem('userDetails') as unknown as User;
    return item != undefined;
  }

  public static isAdmin() : boolean {
    if(!this.isLogged()){
      console.log("No esta logeado");
      return false;
    }
    return User.getLoggedUser().role != UserRole.CLIENT;
  }
  public setUsername(value: string) {
    this.username = value;
  }

  public setPassword(value: string) {
    this.password = value;
  }

  static logout() {
    sessionStorage.removeItem('userDetails');
  }
}

export class DireccionUsuario {
  pais: string;
  estado: string;
  ciudad: string;
  calle: string;
  numero: string;
  codigoPostal: string;

  constructor(
    pais: string,
    estado: string,
    ciudad: string,
    calle: string,
    numero: string,
    codigoPostal: string
  ) {
    this.pais = pais;
    this.estado = estado;
    this.ciudad = ciudad;
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
  }
}

export enum UserRole {
ADMIN = 0,
CLIENT = 1,
}

