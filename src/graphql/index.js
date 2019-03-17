import * as fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import { gql } from 'apollo-server-koa';
import resolvers from './resolvers'

const typeDefs = gql`
  type Role {
    id: String
    name: String
    slug: String
  }

  type Query {
    getRole(id: String): Role,
    listRoles: [Role]
  }
`;

const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default executableSchema
