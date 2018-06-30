import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//para headers
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Component({
  selector: 'app-pasteles',
  templateUrl: './pasteles.component.html',
  styleUrls: ['./pasteles.component.css']
})
export class PastelesComponent implements OnInit {
/*
*variables para guardar el resultado de la consulta api
*/
  dataArray:any = {};
  dataCategoria:any = {};

  constructor( public http: HttpClient ) { }

  ngOnInit() {
    this.capturar_ocacion(0);

    this.loadCategoria();
  }


  capturar_ocacion(id_ocacion:number){
    this.load_pasteles_ocacion(id_ocacion);
  }


  load_pasteles_ocacion(id_oc:number){

    if(id_oc == 0){
      this.http.get('http://localhost/api/categoria/proventas/1/1').subscribe(data => {
        this.dataArray = data;
      } );
    }
    else{
      this.http.get('http://localhost/api/ocacion/proventas/'+id_oc+'/1').subscribe(data => {
        this.dataArray = data;
      });
    }

}
  //para cargar los datos de la categoria
      loadCategoria(){
        this.http.get('http://localhost/api/ocacion/1').subscribe(datas =>{
          this.dataCategoria = datas;
        });
      }
}
