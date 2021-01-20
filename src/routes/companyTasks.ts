import { Router, Request, Response } from 'express';
import { ICompanyTask } from '../../types/companyTask.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const tasks: ICompanyTask[] = await knex('companytask').where('companyId', companyId);
    Api.sendSuccess<ICompanyTask[]>(req, res, tasks);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
