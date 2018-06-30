import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';


import { PostresRoutingModule } from './postres-routing.module';
import { PostresComponent } from './postres.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    PostresRoutingModule
  ],
  declarations:[
    PostresComponent
  ]
})

export class PostresModule {}
