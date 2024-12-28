import { Component, inject, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignUpService } from "./sign-up.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})
export class SignUpComponent implements OnDestroy {
  public signUpForm!: FormGroup;
  private subscriptions$ = new Subject<void>();

  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly signUpService: SignUpService = inject(SignUpService);

  constructor () {
    this.createSignUpForm();
  }

  ngOnDestroy(): void {
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }

  private createSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
    });
  }

  public signUp($event: Event) {
    $event.preventDefault()
    this.signUpService.signup(this.signUpForm.value)
      .pipe(takeUntil(this.subscriptions$))
      .subscribe();
  }
}
