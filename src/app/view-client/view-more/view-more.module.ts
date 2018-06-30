import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMoreRoutingModule } from './view-more-routing.module';
import { ViewMoreComponent } from './view-more.component';

@NgModule({
  imports: [
    CommonModule,
    ViewMoreRoutingModule
  ],
  declarations:[
    ViewMoreComponent
  ]
})

export class ViewMoreModule {}
