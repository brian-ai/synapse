import amqp from 'amqplib/callback_api'
import logger from 'hoopa-logger'

const sendMessage = (channelSubject, message) => {
	logger.info('Connecting to rabbitmq queue...')

	return amqp.connect('amqp://localhost:32772', (err, connection) => {
		logger.info('Connection successfull!')
		const content = Buffer.from(JSON.stringify(message))
		if (err) {
			logger.error(`RabbitMQ | Connection error: ${err}`)
		}

		logger.info('Opening channel...')
		connection.createChannel((err, channel) => {
			logger.info('Channel opened!')
			channel.assertExchange(channelSubject, 'fanout', { durable: false })
			channel.publish(channelSubject, '', content)
			logger.info(
				`${channelSubject} --message sent! --data: ${JSON.stringify(message)}`
			)
		})
	})
}

export default {
	sendMessage,
}
