import { inject, Injectable } from "@angular/core";
import { SignUpInput } from "../interfaces/signup.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private readonly httpClientService = inject(HttpClient)

  signUp(input: SignUpInput) {
    this.httpClientService.post('http://localhost:3000/users', input).subscribe({
      next: () => {
        console.log('usuario criado com sucesso!')
      }
    })
  }
}
