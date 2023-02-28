type Role = 'User' | 'Admin'

export interface User {
  _id: string
  roles: string[]
  email: string
  name?: string
  date_of_birth?: string
  avartar?: string
  address?: string
  phone?: string
  createdAt: string
  updatedAt: string
  __v: number
}
