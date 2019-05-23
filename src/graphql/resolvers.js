import { getRole, listRoles, createRole } from './actions/role'

import { startInteraction } from './actions/interaction'

export default {
	Query: { getRole, listRoles },
	Mutation: { startInteraction, createRole },
}
