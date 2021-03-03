import 'dotenv/config'
import Fastify from 'fastify'
import * as repo from './repository'

const app = Fastify({
  logger: true,
})

app.get('/', async () => 'ok')

app.get('/users', async () => repo.Users())

app.get('/webhook/hasura', async (req, res) => {
  // TODO: Use firebase auth later
  if (req.headers['x-auth-token']) {
    res.status(200).send({
      'X-Hasura-User-Id': '1',
      'X-Hasura-Role': 'user',
    })
  } else {
    res.status(200).send({
      'X-Hasura-User-Id': '0',
      'X-Hasura-Role': 'anonymous',
    })
  }
})

app.listen(27631)
