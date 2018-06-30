import { Component, OnInit } from '@angular/core';
declare var $;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() {
    setTimeout(function(){
      $(function(){
          $('#example').DataTable();
        });
    },1000);

    setTimeout(function(){
      $(function(){
          $('#clientes_view').DataTable();
        });
    },1000);
  }

  ngOnInit() {
  }

}
