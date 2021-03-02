import 'dotenv/config'
import Fastify from 'fastify'
import { Users } from './db'

const app = Fastify({
  logger: true,
})

app.get('/', async () => 'ok')

app.get('/users', async () => Users())

app.listen(27631)
