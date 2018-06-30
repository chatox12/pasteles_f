import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule }  from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { AdminguardGuard } from '../adminguard.guard';

@NgModule({
  imports:[
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ],
  declarations:[
    LayoutComponent,
    SidebarComponent, 
    HeaderComponent
  ],
  providers: [ AdminguardGuard ]
})

export class LayoutModule {}
