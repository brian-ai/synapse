import logger from 'hoopa-logger'
import { RabbitMQ } from '../../services'

const startInteraction = (_, { data, channel }) => {
	let executed = false
	logger.info(`Interaction service | data sent: ${data}`)
	try {
		RabbitMQ.sendMessage(`${channel}_service`, data)
		executed = true
	} catch (error) {
		executed = false
	}

	return {
		data,
		executed,
	}
}

export { startInteraction }
