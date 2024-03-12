import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserGuardGuard } from './utils/user-guard.guard';
import { HomeComponent } from './home/home.component';
import { LugarDetalladoComponent } from './lugar-detallado/lugar-detallado.component';
import { RegistroComponent } from './registro/registro.component';
import { FooterComponent } from './footer/footer.component';
import { AdministrarComponent } from './administrar/administrar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administrar', component: AdministrarComponent},  
  { path: 'lugarDetallado/:id', component: LugarDetalladoComponent },         // Ruta protegida
  { path: 'registro', component: RegistroComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo:'home', pathMatch:'full' },        // Ruta vacía: redirige a la pantalla de Home 
  { path: '**', redirectTo:'home', pathMatch:'full'}        // Ruta inexistente: redirige a la pantalla de Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
