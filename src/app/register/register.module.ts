import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClientModule } from '@angular/common/http';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ModalModule.forRoot(),
      HttpClientModule
  ],
  declarations:[
    RegisterComponent
  ]

})

export class RegisterModule {}
