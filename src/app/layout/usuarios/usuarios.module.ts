import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingComponent } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingComponent
  ],
  declarations:[
    UsuariosComponent
  ]
})

export class UsuariosModule {}
