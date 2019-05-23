import logger from 'hoopa-logger'
import { rethinkly } from '../../services'

export const getRole = async (_, { id }) => {
	logger.info(`Getting role --id: ${id} from rethink`)

	return rethinkly.retrieveData(await rethinkly.instance(), 'roles', id)
}

export const listRoles = async () => {
	logger.info('List roles from rethink')

	return rethinkly.retrieveData(await rethinkly.instance(), 'roles')
}

/* eslint-disable camelcase */
export const createRole = async (_, { data }) => {
	logger.info(`Creating role ${JSON.stringify(data)}...`)
	const { generated_keys = [] } = await rethinkly.insertData(
		await rethinkly.instance(),
		'roles',
		data
	)
	if (generated_keys.length === 0) {
		logger.error(`Error inserting --data: ${JSON.stringify(data)}`)

		return {
			success: false,
			generated_id: '',
		}
	}

	return { success: true, generated_id: generated_keys[0] }
	/* eslint-enable camelcase */
}
