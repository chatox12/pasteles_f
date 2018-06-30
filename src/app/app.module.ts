import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCliComponent } from './profile-cli/profile-cli.component';
import { AdminguardGuard } from './adminguard.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCliComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AdminguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
