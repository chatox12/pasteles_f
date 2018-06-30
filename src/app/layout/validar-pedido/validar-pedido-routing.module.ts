import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarPedidoComponent } from './validar-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: ValidarPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ValidarPedidoRoutingModule {}
