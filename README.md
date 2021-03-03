# test-app

Test for Delegating hard things to SaaS or self-hosted service

# Concept

- Postgres for DB
- Hasura for GraphQL + Realtime
- Firebase Auth for user management
- Node.js (or anything) + Docker for server side business logic
- Metabase for BI + internal dashboard

# Start

```
docker-compose up

# Init hasura
cd hasura
hasura metadata apply --admin-secret secret
hasura migrate apply --admin-secret secret
```

Then request:

```
curl -XPOST http://localhost:8080/v1/graphql \
  -H 'x-hasura-admin-secret: secret' \
  -d '{
    "query":"{users{id}}"
  }'
```
