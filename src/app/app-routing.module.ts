import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormularioComponent } from './Components/formulario/formulario.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Form', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
