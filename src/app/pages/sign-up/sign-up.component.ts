import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../core/services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  public signUpForm!: FormGroup

  private readonly formBuilder = inject(FormBuilder)
  private readonly signUpService = inject(SignUpService)

  constructor () {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  public submitSignUpForm(): void {
    this.signUpService.signUp(this.signUpForm.getRawValue())
  }
}
