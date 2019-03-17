import rethinkly from '../../services/rethink';
import { retrieveData } from 'rethinkly';

export const Role = {};

export const QueryRoles = {
  getRole: async (_, { id }) => retrieveData(await rethinkly(), 'roles', id),

  listRoles: async () => retrieveData(await rethinkly(), 'roles')
};

export const Mutation = {
  // createRole: async (_: any, data: any) =>
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
};
