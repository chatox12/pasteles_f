import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidarPedidoRoutingModule } from './validar-pedido-routing.module';
import { ValidarPedidoComponent } from './validar-pedido.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ValidarPedidoRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [
    ValidarPedidoComponent
  ]
})

export class ValidarPedidoModule {}
