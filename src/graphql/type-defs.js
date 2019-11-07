import { gql } from 'apollo-server-koa'

export default gql`
  type Role {
    id: String
    name: String
    slug: String
  }

  type Config {
    id: String
    version: String
    isMorning: Boolean
  }

  type StandardResponse {
    data: String
    executed: Boolean
  }

  type insertResponse {
    generated_id: String
    success: Boolean
  }

  input RoleInput {
    name: String
    slug: String
  }

  type Query {
    getRole(id: String): Role
    listRoles: [Role]
    getConfig: [Config]
  }

  type Mutation {
    startInteraction(
      data: String
      channel: String
      options: String
    ): StandardResponse
    createRole(data: RoleInput): insertResponse
  }
`
