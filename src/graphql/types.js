import { gql } from 'apollo-server-koa'

export default gql`
	type Role {
		id: String
		name: String
		slug: String
	}

	type StandardResponse {
		text: String
		executed: Boolean
	}

	type Query {
		getRole(id: String): Role
		listRoles: [Role]
	}

	type Mutation {
		startInteraction(data: String, channel: String): StandardResponse
	}
`
