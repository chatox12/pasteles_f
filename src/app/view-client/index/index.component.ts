import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
declare var $;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    //variables para raalizar el pedido
    idPastel: number = 0;
    nombrePastel: string = '';
    precio: number = 0.0;
    saborPastel: string = '0';
    colorPastel: string = '0';
    tipoPastel: string = '0';
    CantidadPiezas: number = 0;
    cantidadPasteles: number = 0;
    fecha: string = '0';
    total: number = 0.00;

    id_categoria:number = 0;
//variables para realizar recibir informacikon del pastel
  nombre_pastel:string;
  precio_pastel:string;


//banderas para determinar si estan llenos o vacios los campos
    bool_saborPastel: boolean = false;
    bool_colorPastel: boolean = false;
    bool_tipoPastel: boolean = false;
    bool_CantidadPiezas: boolean = false;
    bool_cantidadPasteles: boolean = false;
    bool_nombreCliente: boolean = false;
    bool_direccionCliente: boolean = false;
    bool_telefono: boolean = false;
    bool_fecha: boolean = false;


  verSeleccion: string        = '';
  /*
  *variables para guardar el resultado de la consulta api
  */
        dataArray:any = {};
        dataCategoria:any = {};

    constructor(public http: HttpClient) {
      this.capturar(0);
      this.loadCategoria();
    }

/*funcion para capturar el valorr de los select aun falta por trabajar independientemente cada uno*/
    capturar(valor:number) {
          // Pasamos el valor seleccionado a la variable verSeleccion
          this.id_categoria = valor;
      this.function_load_pastel_categoria(valor);
      }


  ngOnInit() {
  }

//para cargar las vista de los pasteles
//se debe de crear una funcion que reciba un parametro despues de eso realizar una busqueda ya sea por la categoria del pastel
    function_load_pastel_categoria(id_categoria:number ){
        if(id_categoria == 0){
          this.http.get('http://localhost/api/proventa/1').subscribe(data => {
            this.dataArray = data;
          });

        }
        else{
          this.http.get('http://localhost/api/categoria/proventas/'+id_categoria+'/1').subscribe(data => {
            this.dataArray = data;
          });

        }

    }

//para cargar los datos de la categoria
    loadCategoria(){
      this.http.get('http://localhost/api/categoria/1').subscribe(datas =>{
        this.dataCategoria = datas;
      });
    }

//funcion para ingresar datos
      add_pedido(){
      console.log('ingreso');
    }

/*
*funciones para verificar que esten correctos los datos
*/


//funcion para verificar los diferentes select
function_verificar_seleccionar_sabor_pastel(valor:string){
  this.saborPastel = valor;
console.log('sabor pastel '+ this.saborPastel);
  if(this.saborPastel == '0'){
    this.bool_saborPastel = true;
  }
  else{
    this.bool_saborPastel = false;
  }
}

/*
*funcion para enviar los valores desde el principal hacia el modal
*/
function_pass_val_pastel(id:number, nombre:string, precio:string){
  this.idPastel = id;
  this.nombre_pastel = nombre;
  this.precio_pastel = precio;

  console.log('id_pastel = '+this.idPastel+' nombre_pastel = '+this.nombre_pastel+' precio_pastel = '+this.precio_pastel);
}


}
