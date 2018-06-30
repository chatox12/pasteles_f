import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

nombre:string = '';
apellidos:string = '';
correo:string = '';
direccion:string = '';
telefono:string = '';
nit:string = '';
usuario:string = '';
password1:string = '';
password2:string = '';

error:boolean = false;
error_user:boolean = false;
error_password:boolean;
error_correo: boolean;


  constructor(public router: Router,public http: HttpClient) { }

  ngOnInit() {
  }

  function_insert_datos(nombre:string, apellidos:string, correo:string, direccion:string,telefono:string, nit:string, usuario:string, password1:string, password2:string){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.correo = correo;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nit = nit;
    this.usuario = usuario;
    this.password1 = password1;
    this.password2 = password2;
/*
if para verificar que todos los datos esten correctamente y no hayan campos vacios
}
*/
    if(this.nombre != '' && this.apellidos != '' && this.function_validar_correo(this.correo) == true && this.direccion != '' && this.telefono != '' && this.function_verificar_user(this.usuario) == false && this.function_verificar_password(this.password1, this.password2) == true){

//para insertar en la base de datos un nuevo cliente
const parametros = new HttpParams()
.set('nombre_cli', this.nombre)
.set('apellido_cli', this.apellidos)
.set('direccion_cli', this.direccion)
.set('telefono_cli', this.telefono)
.set('nickname_cli', this.usuario)
.set('password', this.password1)
.set('correo_cli', this.correo)
.set('nit_cli', this.nit);

this.http.post('http://localhost/api/cliente',parametros ,httpOptions)
  .subscribe(
    res => {
      alert('bienvenido ingrese sus credenciales a continuacion...')
    this.router.navigate(['/', 'login']);
    },
    err => {
      console.log(err)
    }
  );


    }
    else{
      this.error = true;
      console.log('error en los datos o en la funciones');
    }



  }

/*
validar usuario existente
*/
  function_verificar_user(usuario:string ){
    this.usuario = usuario;

if (this.usuario != ''){
    let variable:boolean = false;
  const parametros = new HttpParams()
  .set('user', this.usuario);

  this.http.post('http://localhost/api/validarusuario',parametros ,httpOptions)
    .subscribe(
      res => {
        if(res == true){
          variable = true;
          this.error_user = true;
        }
        else{
          variable = false;
          this.error_user = false;
        }

      },
      err => {
        variable = false;
      }
    );
    return variable;
}
else{
  return false;
}
  }



/*
validar password que sean igual ambas
*/
function_verificar_password(pass1:string, pass2:string){
  this.password1= pass1;
  this.password2 = pass2;

  if(this.password1 == this.password2){
    this.error_password = true;
    return true;
  }
  else{
    this.error_password = false;
    return false;
  }
}

/*
validar que esten bien el correo
*/
function_validar_correo(correo:string){
  this.correo = correo;

  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
if(this.correo != ''){
  if (emailRegex.test(this.correo)) {
    this.error_correo = true;
    return true;
  } else {
this.error_correo = false;
return false;

  }
}
else{
this.error_correo = false;
return false;
}

}

}
