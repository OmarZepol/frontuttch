import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './pages/cursos/cursos.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { VentamodulosComponent } from './pages/ventamodulos/ventamodulos.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    CursosComponent,
    MantenimientoComponent,
    DesarrolloComponent,
    VentamodulosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
