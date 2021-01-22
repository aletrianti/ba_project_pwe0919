import { IUser } from '../../types/auth.types';
import knex from '../knex';
import { dateDB } from '../utils';
const bcrypt = require('bcryptjs');

export const updateUser = async (body: Partial<IUser>, userId: number): Promise<IUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { password, ...bodyToUpdate } = body;
      let toUpdate: Partial<IUser> = {
        ...bodyToUpdate,
        // ...body,
        updatedAt: dateDB(),
      };

      if (password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        toUpdate.password = hashedPassword;
      }

      await knex('user').where('ID', userId).update(toUpdate);
      const updatedUser: IUser = await knex('user').where('ID', userId).first();

      resolve(updatedUser);
    } catch (err) {
      throw new Error(err);
    }
  });

  return;
};
