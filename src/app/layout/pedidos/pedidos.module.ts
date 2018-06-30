import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';

import {ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    PedidosRoutingModule,
    ModalModule.forRoot()
  ],
  declarations:[
    PedidosComponent
  ]
})

export class PedidosModule {}
