import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PastelesRoutingModule } from './pasteles-routing.module';
import { PastelesComponent } from './pasteles.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    PastelesRoutingModule
  ],
  declarations: [PastelesComponent]

})

export class PastelesModule {}
