import rethinkly from 'rethinkly'

const config = {
	host: 'localhost',
	port: 32769,
	db: 'brian',
}

export default () => rethinkly(config)
