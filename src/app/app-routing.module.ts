
import { CalculoComponent } from './calculo/calculo.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
 
  { path: 'bienvenido', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'calculo', component: CalculoComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
