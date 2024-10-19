import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { SignInInput } from "../interfaces/signin.interface";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private readonly httpClientService = inject(HttpClient)

  signUp(input: SignInInput) {
    this.httpClientService.post('http://localhost:4000/users/authenticate', input).subscribe({
      next: (payload: any) => {
        console.log('payload ', payload)
        console.log('usuario autenticado com sucesso!')
      }
    })
  }
}
