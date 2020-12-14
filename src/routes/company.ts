import { Router, Request, Response } from 'express';
import { IUser } from '../../types/auth.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/employees', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const employees: IUser[] = await knex('user').where('companyId', companyId);
    Api.sendSuccess<IUser[]>(req, res, employees);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
