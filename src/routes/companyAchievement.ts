import { Router, Request, Response } from 'express';
import { ICompanyAchievement } from '../../types/companyAchievement.types';
import knex from '../knex';
import { Api, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const companyAchievements: ICompanyAchievement[] = await knex('companyachievement').where('companyId', companyId);
    Api.sendSuccess<ICompanyAchievement[]>(req, res, companyAchievements);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
