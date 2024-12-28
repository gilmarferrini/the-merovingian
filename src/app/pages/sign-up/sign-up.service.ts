import { inject, Injectable } from "@angular/core"
import { SignUpApiResponse, SignUpDTO } from "../../core/interfaces/sign-up"
import { SignUpApiService } from "../../core/api/sign-up/sign-up-api.service"
import { Observable } from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private readonly signUpApiService: SignUpApiService = inject(SignUpApiService)

  public signup(input: SignUpDTO): Observable<SignUpApiResponse> {
    return this.signUpApiService.signUp(input)
  }

}
