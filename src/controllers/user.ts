import { IUser } from '../../types/auth.types';
import knex from '../knex';
import { dateDB } from '../utils';

export const updateUser = async (body: Partial<IUser>, userId: number): Promise<IUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const toUpdate = {
        body,
        updatedAt: dateDB(),
      };
      await knex('user').where('ID', userId).update(toUpdate);
      const updatedUser: IUser = await knex('user').where('ID', userId);

      resolve(updatedUser);
    } catch (err) {
      throw new Error(err);
    }
  });

  return;
};
