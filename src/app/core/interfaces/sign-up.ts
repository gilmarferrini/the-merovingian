export interface SignUpDTO {
  name: string
  email: string
  description: string
  password: string
  confirmPassword: string
}

export interface SignUpApiResponse {
  id: string
  name: string
  email: string
}
