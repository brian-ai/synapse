import { getRole, listRoles, createRole } from './actions/role'
import { getConfig } from './actions/config'
import { startInteraction } from './actions/interaction'

export default {
	Query: { getRole, getConfig, listRoles },
	Mutation: { startInteraction, createRole },
}
