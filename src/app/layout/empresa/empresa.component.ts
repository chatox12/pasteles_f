import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { NgForm } from '@angular/forms';
declare var $;


const httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
};

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  load_emp:any = {};
  error_load:boolean = false;

  //PARA ACTUALIZAR 
  nombre:string = '';
  nit:string = '';
  direccion:string = '';
  ciudad:string = '';
  telefono:string = '';
  id:string = '';

  constructor( private http: HttpClient) {

    this.load_com();

    setTimeout(function(){
      $(function(){
          $('#example').DataTable();
        });
    },1000);
   }

  ngOnInit() {}

  load_com(){
    this.http.get('http://localhost/api/empresa/2').subscribe(
      data => {
        this.load_emp = data;
      },
      err =>{
        this.error_load = true;
      }
    );
  }

    function_add_element(id:string,nombre:string, nit:string, direccion:string, ciudad:string, telefono:string){
      this.id = id;
      this.nombre = nombre;
      this.nit = nit;
      this.direccion = direccion;
      this.ciudad = ciudad;
      this.telefono = telefono;
    }
  function_update(forms: NgForm){

    const parametros = new HttpParams()
    .set('nombre', forms.value.nombre)
    .set('nit_emp', forms.value.nit)
    .set('direccion', forms.value.direccion)
    .set('ciudad', forms.value.ciudad)
    .set('telefono', forms.value.telefono)
    .set('logo', forms.value.logo);
    
    this.http.put('http://localhost/api/empresa/'+this.id,parametros,httpOptions).subscribe(
      res=>{
        console.log(res);
      },
      err => {

      }
    );
  }
  

}
