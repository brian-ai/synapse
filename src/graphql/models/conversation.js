import logger from 'hoopa-logger'
import { RabbitMQ } from '../../services'

const startConversation = (_, { text }) => {
	logger.info(`Conversation service | text sent: ${text}`)
	RabbitMQ.sendMessage('conversation_service', { text })

	return {
		text,
		executed: true,
	}
}

export { startConversation }
