import logger from 'hoopa-logger'
import { retrieveData, insertData } from 'rethinkly'
import rethinkly from '../../services/rethinkly'

export const QueryRoles = {
	getRole: async (_, { id }) => {
		logger.info(`Getting role --id: ${id} from rethink`)

		return retrieveData(await rethinkly(), 'roles', id)
	},

	listRoles: async () => {
		logger.info('List roles from rethink')

		return retrieveData(await rethinkly(), 'roles')
	}
}

export const createRole = async (_, { data }) => {
	logger.info(`Creating role ${JSON.stringify(data)}...`)
	const { generated_keys = [] } = await insertData(
		await rethinkly(),
		'roles',
		data
	)
	if (!generated_keys.length) {
		logger.error(`Error inserting --data: ${JSON.stringify(data)}`)

		return {
			success: false,
			generated_id: ''
		}
	}

	return { success: true, generated_id: generated_keys[0] }
}
