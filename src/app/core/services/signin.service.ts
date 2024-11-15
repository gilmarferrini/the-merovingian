import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { SignInInput } from "../interfaces/signin.interface";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private readonly httpClientService = inject(HttpClient)

  signIn(input: SignInInput) {
    return this.httpClientService.post<{ token: string }>('http://localhost:4000/users/authenticate', input)
  }
}
