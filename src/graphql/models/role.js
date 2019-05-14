import { retrieveData } from 'rethinkly'
import rethinkly from '../../services/rethinkly'

export const QueryRoles = {
	getRole: async (_, { id }) => retrieveData(await rethinkly(), 'roles', id),

	listRoles: async () => retrieveData(await rethinkly(), 'roles'),
}

export const Mutation = {
	// CreateRole: async (_: any, data: any) =>
	//     r.save(Object.assign({}, data)),
	// updateRole: async (_: any, data: any) => {
	//     return r.get(data.id).updateAt(Object.assign({}, data)).run()
	// },
	// deleteRole: async (_: any, { id }: any) => {
	//     return r.get(id).then((author: any) => {
	//         if (author) {
	//             return author.delete()
	//         }
	//     })
	// }
}
