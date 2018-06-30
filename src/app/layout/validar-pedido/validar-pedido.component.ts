import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

declare var $;

const httOptions = {
  headers: new HttpHeaders({'Content-type':'application/x-www-form-urlencoded'})
}

@Component({
  selector: 'app-validar-pedido',
  templateUrl: './validar-pedido.component.html',
  styleUrls: ['./validar-pedido.component.css']
})
export class ValidarPedidoComponent implements OnInit {

  load_vpedido: any = {};
  load_data_view: any = {};
  constructor(private http: HttpClient) {
    this.function_load_vpedido();

    setTimeout(function(){
      $(function(){
          $('#example').DataTable();
        });
    },1000);
  }

  function_obtener_id(id: number){
    this.load_data_view = this.load_vpedido.pedidos[id];
  }


  function_load_vpedido(){
    this.http.get('http://localhost/api/validar_pedido_get').subscribe(
      recived => {
        this.load_vpedido = recived;
      },
      error => {
        
      }
    );
  }


  function_accepted_pedido(){
    alert('aceptando pedido, llamar al cliente por la confirmacion, se le enviara un correo tambien');
  }










  ngOnInit() {
  }

}
