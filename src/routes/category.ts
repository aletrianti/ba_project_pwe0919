import { Router, Request, Response } from 'express';
import { ICategory } from '../../types/category.types';
import knex from '../knex';
import { Api, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const categories: ICategory[] = await knex('category').where('companyId', companyId);
    Api.sendSuccess<ICategory[]>(req, res, categories);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
