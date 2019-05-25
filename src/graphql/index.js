import { makeExecutableSchema } from 'graphql-tools'
// Scheme Content
import typeDefs from './type-defs'
import resolvers from './resolvers'

const executableSchema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

export default executableSchema
