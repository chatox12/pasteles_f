import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  declarations:[
    LoginComponent
  ]

})

export class LoginModule {}
