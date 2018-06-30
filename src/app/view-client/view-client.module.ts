import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientRoutingModule } from './client-routing.module';
import { ViewClientComponent } from './view-client.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ViewClientComponent,
    NavbarComponent,
  ]

})

export class ViewClientModule {}
