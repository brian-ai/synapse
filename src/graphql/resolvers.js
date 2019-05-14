import { QueryRoles } from './models/role'

import { startInteraction } from './models/interaction'

export default {
	Query: { ...QueryRoles },
	Mutation: { startInteraction },
}
