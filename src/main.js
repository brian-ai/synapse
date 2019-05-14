/**
 * Synapse
 * Server instance
 * @memberof core
 */
import Koa from 'koa'
import cors from 'koa2-cors'
import { ApolloServer } from 'apollo-server-koa'
import logger from 'hoopa-logger'
import schema from './graphql'

const server = new ApolloServer({ schema })
const app = new Koa()
const { graphqlPath } = server
const port = process.env.PORT || 4000

app.use(cors())
server.applyMiddleware({ app })

app.listen({ port }, () =>
	logger.info(`🚀 Server ready at http://localhost:${port}${graphqlPath}`)
)
