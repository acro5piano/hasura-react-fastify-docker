import Knex from 'knex'
import * as config from './config'
import { User } from './entities/User'

export const db = Knex(config.db)

export const Users = () => db<User>('users')
