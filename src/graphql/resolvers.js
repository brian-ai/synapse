import { QueryRoles } from './models/role'

import { startPlaylist } from './models/playlist'
import { startConversation } from './models/conversation'

export default {
	Query: { ...QueryRoles },
	Mutation: { startPlaylist, startConversation },
}
