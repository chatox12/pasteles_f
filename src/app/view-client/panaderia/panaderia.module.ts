import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';


import { PanaderiaRoutingModule } from './panaderia-routing.module';
import { PanaderiaComponent } from './panaderia.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    PanaderiaRoutingModule
  ],
  declarations: [PanaderiaComponent]
})

export class PanaderiaModule {}
