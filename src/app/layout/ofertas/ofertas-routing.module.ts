import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertasComponent } from './ofertas.component';

const routes: Routes = [
  {
    path: '',
    component: OfertasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OfertasRoutingModule {}
