import { makeExecutableSchema } from 'graphql-tools'
// Helpers
import typeDefs from './types'
import resolvers from './resolvers'

const executableSchema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

export default executableSchema
