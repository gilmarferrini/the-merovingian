import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  { path: '', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule) },
  { path: 'criar-conta', loadChildren: () => import('./pages/sign-up/sign-up.module').then(module => module.SignUpModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
