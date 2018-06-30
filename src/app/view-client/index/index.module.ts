import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule  } from './index-routing.module';
import { IndexComponent } from './index.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:[
    CommonModule,
    IndexRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,  ],
  declarations:[
    IndexComponent
  ]
})

export class IndexModule {}
