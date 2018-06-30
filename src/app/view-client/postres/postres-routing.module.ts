import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostresComponent }  from './postres.component';

const routes: Routes = [{
  path: '', component: PostresComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostresRoutingModule {}
