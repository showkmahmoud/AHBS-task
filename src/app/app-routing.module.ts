import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {
  path:'landing',
  loadChildren:() =>import('./layouts/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path:'**',
    loadChildren:() => import('./layouts/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
