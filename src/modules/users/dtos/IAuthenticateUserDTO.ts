export interface IAuthenticateUserDTO {
  email: string
  password: string
}

export interface IAuthenticateUserResponseDTO {
  user: {
    id: string
    email: string
    name: string
  }
  token: string
}
