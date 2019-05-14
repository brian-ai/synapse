import { gql } from 'apollo-server-koa'

export default gql`
	type Role {
		id: String
		name: String
		slug: String
	}

	type RequestedGenre {
		genre: String
		played: Boolean
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
		startPlaylist(genre: String, play: Boolean): RequestedGenre
		startConversation(text: String): StandardResponse
	}
`
