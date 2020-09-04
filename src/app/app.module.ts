import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteEjemploComponent } from './componente-ejemplo/componente-ejemplo.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CalculoComponent } from './calculo/calculo.component';
import { LoginComponent } from './auth/login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEjemploComponent,
    CalculoComponent,
    LoginComponent,
    BienvenidaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
