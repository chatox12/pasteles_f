import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//para headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};


@Component({
  selector: 'app-panaderia',
  templateUrl: './panaderia.component.html',
  styleUrls: ['./panaderia.component.css']
})
export class PanaderiaComponent implements OnInit {

  /*
  *variables para guardar el resultado de la consulta api
  */
    dataArray:any = {};

  constructor(public http: HttpClient) {
    this.load_panaderia();
   }

  ngOnInit() {
  }

  load_panaderia(){
      this.http.get('http://localhost/api/categoria/proventas/2/1').subscribe(data => {
        this.dataArray = data;
      } );
    }
}
