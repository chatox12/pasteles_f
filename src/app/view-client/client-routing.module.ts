import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewClientComponent} from './view-client.component';


const routes: Routes = [
  {
    path: '',
    component: ViewClientComponent,
    children:[
      { path: '', redirectTo: 'index'},
      { path: 'index', loadChildren: './index/index.module#IndexModule'},
      { path: 'panaderia', loadChildren: './panaderia/panaderia.module#PanaderiaModule' },
      { path: 'pasteles', loadChildren: './pasteles/pasteles.module#PastelesModule'},
      { path: 'postres', loadChildren: './postres/postres.module#PostresModule'},
      { path: 'view-more/:id', loadChildren: './view-more/view-more.module#ViewMoreModule'},
      { path: 'acercade', loadChildren: './acercade/acercade.module#AcercadeModule'}
    ]
  }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class ClientRoutingModule {}
