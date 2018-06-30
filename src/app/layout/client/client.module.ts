import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    ModalModule.forRoot()

  ],
  declarations: [
    ClientComponent
  ]
})

export class ClientModule {}
