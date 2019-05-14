import logger from 'hoopa-logger'
import { RabbitMQ } from '../../services'

export const startPlaylist = (_, { genre, play = false }) => {
	logger.info(`Playlist service | requested genre: ${genre} | To play? ${play}`)
	RabbitMQ.sendMessage('playlist_service', { genre, play })

	return {
		genre,
		played: false,
	}
}
