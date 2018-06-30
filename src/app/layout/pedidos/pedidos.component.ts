import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

declare var $;


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {


  load_vpedidos: any = {};
  load_view: any = {};

  constructor(private http: HttpClient) {

    this.fnction_load_data();

    setTimeout(function(){
      $(function(){
          $('#example').DataTable();
        });
    },1000);
  }




//funcion para cargar los datos a la tabla 
  fnction_load_data(){
    this.http.get('http://localhost/api/pedidos').subscribe(
      recived => {
        this.load_vpedidos = recived;
      },
      error => {
        
      }
    );
  }

//function from view more
function_view_more(id: number){
  this.load_view = this.load_vpedidos.pedidos[id];
} 

//jalar id de pedido
function_entrega_pastel(){
  console.log('pastel entregado');
}

















  ngOnInit() {
  }

}
