import logger from 'hoopa-logger'
import { rethinkly } from '../../services'

const { instance, retrieveData, insertData } = rethinkly


export const getConfig = async () => {
  logger.info(`Getting brian current config from Rethink`)

		return retrieveData(await instance, 'config')
}

export const updateConfig = async (field, value) => {
		logger.info(`Updating ${field} into config with ${value}`)

			return
}
