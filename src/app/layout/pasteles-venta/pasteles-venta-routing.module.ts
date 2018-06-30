import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PastelesVentaComponent } from './pasteles-venta.component';

const routes: Routes = [
  {
    path: '',
    component: PastelesVentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PastelesVentaRoutingModule {}
