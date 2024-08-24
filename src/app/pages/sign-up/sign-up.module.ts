import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { InputMessageErrorModule } from '../core/components/input-message-error.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    SignUpRoutingModule,
    InputMessageErrorModule
  ]
})
export class SignUpModule { }
