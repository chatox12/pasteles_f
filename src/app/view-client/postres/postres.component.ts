import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//para headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};


@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {
  /*
  *variables para guardar el resultado de la consulta api
  */
    dataArray:any = {};

  constructor( public http: HttpClient) {
    this.load_postres();
  }

  ngOnInit() {
  }

  load_postres(){
      this.http.get('http://localhost/api/categoria/proventas/3/1').subscribe(data => {
        this.dataArray = data;
      } );
    }
}
