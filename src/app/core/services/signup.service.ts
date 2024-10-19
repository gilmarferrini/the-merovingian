import { inject, Injectable } from "@angular/core";
import { SignUpInput } from "../interfaces/signup.interface";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private readonly httpClientService = inject(HttpClient)

  private readonly router = inject(Router)

  signUp(input: SignUpInput) {
    this.httpClientService.post('http://localhost:4000/users', input).subscribe({
      next: () => {
        console.log('usuario criado com sucesso!')
        this.router.navigate(['sign-in'])
      }
    })
  }
}
