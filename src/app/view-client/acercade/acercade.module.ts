import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercadeRoutingModule } from './acercade-routing.module';
import { AcercadeComponent } from './acercade.component';

@NgModule({
  imports: [
    CommonModule,
    AcercadeRoutingModule
  ],
  declarations: [AcercadeComponent]
})

export class AcercadeModule {}
