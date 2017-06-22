import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './shared/error-404/error-404.component'
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/main/home', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    MainModule,
    AuthModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }