import RabbitMQ from './rabbitmq'
import { Rethinkly, retrieveData, insertData } from './rethinkly'

const rethinkly = { instance: Rethinkly(), retrieveData, insertData }

export { RabbitMQ, rethinkly }
