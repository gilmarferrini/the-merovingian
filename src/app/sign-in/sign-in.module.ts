import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRouting } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRouting
  ]
})
export class SignInModule { }
