import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Router } from '@angular/router';

declare var $;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
};


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  //para cargar informacion de las ofertas 
  load_oferta: any = {};

  //variables para validar las entradas 
  fechas_bool:boolean = true;
  descuento_bool:boolean = true;
  cantidad_bool: boolean = true;
  todo_correcto_bool:boolean = true;
  id_ofertas:string = '';

  constructor(private router: Router, private http: HttpClient) {

    this.function_load_oferta();

    setTimeout(function(){
      $(function(){
          $('#example').DataTable();
        });
    },1000);
  }

  ngOnInit() {}



  function_date(date: HTMLInputElement, date_final: HTMLInputElement, descuent: HTMLInputElement, cantidad:HTMLInputElement, activon:HTMLInputElement ){
    //tomar como referencia 
    // 1 activo 
    // 0 no activo 
    var fecha_uno = new Date(date.value);
    var fecha_dos = new Date(date_final.value); 

    if((this.function_validar_fechas(date, date_final) == true) && (this.function_validar_descuento(descuent) == true) && (cantidad.value != null)){

      const para_ofertas = new HttpParams()
      .set('inicio',date.value)
      .set('fin',date_final.value)
      .set('descuento',descuent.value)
      .set('cantidad',cantidad.value)
      .set('estado', activon.value);
      
      this.http.post('http://localhost/api/oferta/', para_ofertas,httpOptions).subscribe(
        res=>{
          console.log(res);
          location.reload();
        },
        err => {

        }
      );

    }
    else{
      this.todo_correcto_bool = false;
    }



  }

  function_validar_fechas(date: HTMLInputElement, date_1:HTMLInputElement){
    var fecha_inicio = new Date(date.value);
    var fecha_finalizar = new Date(date_1.value);
    if((fecha_inicio == fecha_finalizar)  || (fecha_inicio > fecha_finalizar) ){
      this.fechas_bool = false;
      return false;
    }
    else{
      this.fechas_bool = true;
    }
    return true;
  }

  function_validar_descuento(descuento: HTMLInputElement){
    if(descuento == null){
      this.descuento_bool = false;
      return false;
    }
    return true;
  }

//function obtener id ofertas 
function_obtener_id(id:string){
  this.id_ofertas = id;
}



//function update ofertas 
  function_update_ofertas(date: HTMLInputElement, date_final: HTMLInputElement, descuent: HTMLInputElement, cantidad:HTMLInputElement, activon:HTMLInputElement){
//tomar como referencia 
    // 1 activo 
    // 0 no activo 
    var fecha_uno = new Date(date.value);
    var fecha_dos = new Date(date_final.value); 

    if((this.function_validar_fechas(date, date_final) == true) && (this.function_validar_descuento(descuent) == true) && (cantidad.value != null)){

      const para_ofertas = new HttpParams()
      .set('inicio',date.value)
      .set('fin',date_final.value)
      .set('descuento',descuent.value)
      .set('cantidad',cantidad.value)
      .set('estado', activon.value);
      
      this.http.put('http://localhost/api/oferta/'+this.id_ofertas, para_ofertas,httpOptions).subscribe(
      res=>{
          console.log(res);
          location.reload();
        },
        err => {

        }
      );

    }
    else{
      this.todo_correcto_bool = false;
    }


  }


  function_load_oferta(){
    this.load_oferta = null;
    this.http.get('http://localhost/api/oferta/2').subscribe(
      recived => {
           this.load_oferta = recived;
      },
      error => {
        this.load_oferta = null;
      }
    );

  }


}
