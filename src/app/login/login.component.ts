import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { NgForm } from '@angular/forms';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public router: Router, public http: HttpClient) { 

  }

  ngOnInit() {  }

  function_login(form: NgForm){

    var tipo_consulta:string = "2" ;
    var respo: boolean = false;
    var pass: number = 1;
  const params = new HttpParams()
  .set('user', form.value.email)
  .set('password', form.value.pass)
  .set('tipo_consulta', tipo_consulta);

  this.http.post('http://localhost/api/logincliente/',params ,httpOptions)
  .subscribe(
    res => {
      if(res.valueOf){
  //console.log(res.id);
        localStorage.setItem('id',JSON.stringify(res));
        console.log('id ' + localStorage.getItem('id'));
        this.router.navigate(['/layout']);
      }
      
    },  
    err => {
      console.log(err);
    }
  );


}




  function_consulta_datos(user: string, password:string) {
    var respuesta: boolean = false;
  
    

  }
}
