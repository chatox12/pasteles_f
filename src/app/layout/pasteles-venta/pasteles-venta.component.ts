import { Component, OnInit } from '@angular/core';
declare var $;


@Component({
  selector: 'app-pasteles-venta',
  templateUrl: './pasteles-venta.component.html',
  styleUrls: ['./pasteles-venta.component.css']
})
export class PastelesVentaComponent implements OnInit {

  constructor() {
    setTimeout(function(){
      $(function(){
          $('#example').DataTable();
        });
    },1000);
  }

  ngOnInit() {
  }

}
