import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PastelesComponent } from './pasteles.component';

const routes: Routes = [
  {
    path: '', component: PastelesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class PastelesRoutingModule {}
