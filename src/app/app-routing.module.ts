import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { VentamodulosComponent } from './pages/ventamodulos/ventamodulos.component';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'desarrollo', component: DesarrolloComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'mantenimiento', component: MantenimientoComponent},
  {path: 'venta-modulos', component: VentamodulosComponent},
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
