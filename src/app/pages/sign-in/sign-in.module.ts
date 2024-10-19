import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRouting } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMessageErrorModule } from '../../core/components/input-message-error.module';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRouting,

    ReactiveFormsModule,
    InputMessageErrorModule
  ]
})
export class SignInModule { }
