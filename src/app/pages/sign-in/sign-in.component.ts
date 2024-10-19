import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../../core/services/signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  public signInForm!: FormGroup

  private readonly formBuilder = inject(FormBuilder)
  private readonly signInService = inject(SignInService)

  constructor () {
    this.signInForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  public submitSignInForm(): void {
    this.signInService.signUp(this.signInForm.getRawValue())
  }

}
