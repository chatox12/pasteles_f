import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClientModule } from '@angular/common/http';

import { RecoverpassRoutingModule } from './recoverpass-routing.module';
import { RecoverpassComponent } from './recoverpass.component';

@NgModule({
  imports: [
    CommonModule,
    RecoverpassRoutingModule,
    ModalModule.forRoot(),
      HttpClientModule
  ],
  declarations:[
    RecoverpassComponent
  ]

})

export class RecoverpassModule {}
