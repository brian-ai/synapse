import rethinkly, { transactions } from 'rethinkly'

const config = {
  host: process.env.RETHINKDB_URL,
  port: process.env.RETHINKDB_PORT,
  db: process.env.DB_NAME
}

const Rethinkly = () => rethinkly.connect(config)

export { Rethinkly, transactions }
