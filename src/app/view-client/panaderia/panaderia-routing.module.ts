import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanaderiaComponent } from './panaderia.component';

const routes: Routes = [
  {
    path:'', component: PanaderiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PanaderiaRoutingModule {}
