import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AdminguardGuard } from '../adminguard.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AdminguardGuard ],
    children: [
      {path: '', redirectTo: 'dashboard'},
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'client', loadChildren: './client/client.module#ClientModule'},
      {path: 'empresa', loadChildren: './empresa/empresa.module#EmpresaModule'},
      {path: 'ofertas', loadChildren: './ofertas/ofertas.module#OfertasModule'},
      {path: 'pasteles-venta', loadChildren: './pasteles-venta/pasteles-venta.module#PastelesVentaModule'},
      {path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosModule'},
      {path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule'},
      {path: 'validar-pedido', loadChildren: './validar-pedido/validar-pedido.module#ValidarPedidoModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {}
