import RabbitMQ from './rabbitmq'
import { Rethinkly, transactions } from './rethinkly'

const rethinkly = { instance: Rethinkly, transactions }

export { RabbitMQ, rethinkly }
