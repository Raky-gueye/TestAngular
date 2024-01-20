import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApercuComponent } from './apercu/apercu.component';
import { VentesComponent } from './ventes/ventes.component';
import { AnalysesComponent } from './analyses/analyses.component';

const routes: Routes = [
  {path: 'apercu' , component: ApercuComponent},
  {path: 'ventes' , component : VentesComponent},
  {path: 'analyses' , component: AnalysesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
