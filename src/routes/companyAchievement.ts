import { Router, Request, Response } from 'express';
import { ITableAchievement } from '../../client/src/store/interfaces/tables.interfaces';
import { ICompanyAchievement, INewCompanyAchievementInput } from '../../types/companyAchievement.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const companyAchievements: ITableAchievement[] = await knex('companyachievement')
      .select('ID as id', 'name as title', 'description', 'date')
      .where('companyId', companyId);
    Api.sendSuccess<ITableAchievement[]>(req, res, companyAchievements);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const body: INewCompanyAchievementInput = req.body;

    const newCompanyAcievement = await knex('companyachievement').insert({
      name: body.name,
      description: body.description,
      companyId: companyId,
      createdAt: dateDB(),
      updatedAt: dateDB(),
      date: body.date,
    });

    const companyachievement = await knex('companyachievement').where('ID', newCompanyAcievement).first();

    Api.sendSuccess<ICompanyAchievement>(req, res, companyachievement);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/update', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const body: Partial<ICompanyAchievement> = req.body;
    const { ID, ...reqbody } = body;

    const updatedCompanyAcievement = await knex('companyachievement')
      .where({ ID: Number(ID), companyId: Number(companyId) })
      .update(reqbody);

    const companyAcievement: ICompanyAchievement = await knex('companyachievement').where('ID', updatedCompanyAcievement).first();

    Api.sendSuccess<ICompanyAchievement>(req, res, companyAcievement);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/delete', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const ID = req.body;

    await knex('companyachievement')
      .where({ ID: Number(ID), companyId: Number(companyId) })
      .del();

    Api.sendSuccess<number>(req, res, ID);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
