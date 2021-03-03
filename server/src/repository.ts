import { db } from './db'

export interface User {
  id: string
  name: string
}

export const Users = () => db<User>('users')
