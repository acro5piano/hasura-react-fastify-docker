import Knex from 'knex'
import * as config from './config'

export const db = Knex(config.db)
