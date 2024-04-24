export interface IUpdateUserDTO {
  id: string
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
}

export interface IUpdateUserResponseDTO {
  id: string
  name: string
  email: string,
  updatedAt: Date
}
