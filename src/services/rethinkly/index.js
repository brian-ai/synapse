import { createLink, data } from 'rethinkly'

const config = {
  host: process.env.RETHINKDB_URL,
  port: process.env.RETHINKDB_PORT,
  db: process.env.DB_NAME
}

const Rethinkly = () => createLink(config)
// TODO: Export better this methods
const retrieveData = data.get
const insertData = data.insert

export { Rethinkly, retrieveData, insertData }
