import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations:[
    EmpresaComponent
  ]
})

export class EmpresaModule {}
