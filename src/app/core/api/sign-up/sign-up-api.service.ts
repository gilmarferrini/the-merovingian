import { inject, Injectable } from "@angular/core";
import { SignUpApiResponse, SignUpDTO } from "../../interfaces/sign-up";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignUpApiService {
  private readonly httpClient: HttpClient = inject(HttpClient)

  signUp(input: SignUpDTO): Observable<SignUpApiResponse> {
    return this.httpClient.post<SignUpApiResponse>('http://localhost:4000/users', input)
  }

}
