export interface AuthenticationResponse {
  token: string
}
export interface AuthenticationRequest {
  email : string,
  password: string
}
export interface RegisterRequest {
  email: string,
  password: string
}

export interface UserInfoResponse {
  id: number,
  email: string
}
