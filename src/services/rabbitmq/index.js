import amqp from 'amqplib/callback_api'
import logger from 'hoopa-logger'

const sendMessage = (channelSubject, message) => {
	logger.info('Connecting to rabbitmq queue...')

	return amqp.connect(
		`amqp://${process.env.RABBIT_URL}:${process.env.RABBIT_PORT}`,
		(err, connection) => {
			if (err) {
				return logger.error(`RabbitMQ | Connection error: ${err}`)
			}
			logger.info('Connection successfull!')

			const content = Buffer.from(message)

			logger.info('Opening channel...')

			connection.createChannel((err, channel) => {
				if (err) {
					return logger.error(`RabbitMQ | Error opening channel: ${err}`)
				}

				logger.info('Channel opened!')
				channel.assertExchange(channelSubject, 'fanout', { durable: false })
				channel.publish(channelSubject, '', content)
				logger.info(`${channelSubject} --message sent! --data: ${message}`)
			})
		}
	)
}

export default {
	sendMessage
}
