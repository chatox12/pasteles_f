import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastelesVentaRoutingModule } from './pasteles-venta-routing.module';
import { PastelesVentaComponent } from './pasteles-venta.component';

@NgModule({
  imports:[
    CommonModule,
    PastelesVentaRoutingModule
  ],
  declarations: [
    PastelesVentaComponent
  ]

})

export class PastelesVentaModule {}
