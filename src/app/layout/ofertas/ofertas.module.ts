import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasComponent } from './ofertas.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OfertasRoutingModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    OfertasComponent
  ]
})

export class OfertasModule {}
