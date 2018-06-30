import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //
    //variable para asignar el localstorage entre los clientes
  local_id = localStorage.getItem('id');
  constructor(private http: HttpClient) {


   }


  ngOnInit() {
  }


}
