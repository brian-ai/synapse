import logger from 'hoopa-logger'
import { rethinkly } from '../../services'

const { instance, retrieveData, insertData } = rethinkly

export const getRole = async (_, { id }) => {
  logger.info(`Getting role --id: ${id} from rethink`)

  return retrieveData(await instance, 'roles', id)
}

export const listRoles = async () => {
  logger.info('List roles from rethink')

  return retrieveData(await instance, 'roles')
}

export const createRole = async (_, { data }) => {
  logger.info(`Creating role ${JSON.stringify(data)}...`)
  const { generated_keys = [] } = await insertData(
    await instance,
    'roles',
    data
  )
  if (generated_keys.length === 0) {
    logger.error(`Error inserting --data: ${JSON.stringify(data)}`)

    return {
      success: false,
      generated_id: ''
    }
  }

  return { success: true, generated_id: generated_keys[0] }
}
