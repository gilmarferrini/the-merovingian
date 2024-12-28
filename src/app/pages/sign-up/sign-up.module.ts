import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignUpRoutingModule } from "./sign-up-routing.module";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up.component";


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
  ],
  exports: []
})
export class SignUpModule {}
