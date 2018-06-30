import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataArray:any = {};
  
constructor(private http: HttpClient) { 
  

  this.load_profile_user();
}

  ngOnInit() {
  }

  function_salir(){
    localStorage.removeItem('id');
  }
  
  load_profile_user(){
    this.http.get('http://localhost/api/cliente/'+localStorage.getItem('id')+'/0').subscribe(data => {
      this.dataArray = data;
    });
  }
}
