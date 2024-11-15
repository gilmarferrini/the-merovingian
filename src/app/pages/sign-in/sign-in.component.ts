import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../../core/services/signin.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  public signInForm!: FormGroup

  private destroyRef = inject(DestroyRef)
  private readonly formBuilder = inject(FormBuilder)
  private readonly signInService = inject(SignInService)
  private readonly localStorageService = inject(LocalStorageService)

  constructor () {
    this.signInForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  public submitSignInForm(): void {
    this.signInService.signIn(this.signInForm.getRawValue()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (signInResponse) => {
        if (!signInResponse) return;
        this.localStorageService.save({
          key: 'token',
          item: signInResponse.token
        })
      }
    })
  }

}
