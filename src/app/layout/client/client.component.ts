import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
declare var $;


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client_save: any = {};
  constructor(private http: HttpClient) {
    this.load_client();
    setTimeout(function(){
      $(function(){
          $('#example').DataTable();
        });
    },1000);





   }

  ngOnInit() {
  }

    load_client(){
      this.http.get('http://localhost/api/cliente/1').subscribe(
        data => {
          this.client_save = data;
        }
      );
    }
}
