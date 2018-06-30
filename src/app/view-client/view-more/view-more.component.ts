import { Component, OnInit } from '@angular/core';
//ActivatedRoute es para leer el texto que trae consiguo la ruta ./viewmore/{datos}
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})


export class ViewMoreComponent implements OnInit {

  public movimiento;
id: number = 0;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // subscripción al observable params
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(''+this.id);
          });
  }

}
