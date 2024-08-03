import { Injectable } from "@angular/core";
import { SignUpInput } from "../interfaces/signup.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  //private readonly httpClientService: HttpClient

  signUp(input: SignUpInput) {
    console.log('input ', input)
  }
}
