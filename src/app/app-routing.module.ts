import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import {  SignUpComponent } from './sign-up/sign-up.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';
const routes: Routes = [
  {path:'', component : HomeComponentComponent},
  // {path:'sign-up-component', component : SignUpComponent}
  {path:'successPage' , component : SuccessPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
