import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: '', loadChildren: './view-client/view-client.module#ViewClientModule'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'layout', loadChildren: './layout/layout.module#LayoutModule'},
    {path: 'recoverpass/:term', loadChildren: './recoverpass/recoverpass.module#RecoverpassModule'},
    {path: 'register' , loadChildren: './register/register.module#RegisterModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
