import { Router, Request, Response } from 'express';
import { ITableCategory } from '../../client/src/store/interfaces/tables.interfaces';
import { ICategory, INewCategoryInput } from '../../types/category.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const categories: ITableCategory[] = await knex('category').select('ID as id', 'name as title').where('companyId', companyId);
    Api.sendSuccess<ITableCategory[]>(req, res, categories);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const newCategoryName: INewCategoryInput = req.body;

    const categoryExists: ICategory = await knex('category').where('name', newCategoryName.name).first();

    if (categoryExists) throw Error(`${categoryExists.name} already exists for company: ${companyId}`);

    const newCategory = await knex('category').insert({
      name: newCategoryName.name,
      companyId: companyId,
      createdBy: userId,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const category = await knex('category').where('ID', newCategory).first();

    Api.sendSuccess<ICategory>(req, res, category);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/update', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const body: Partial<ICategory> = req.body;
    const { ID, ...reqbody } = body;

    const updatedCategory = await knex('category').where('ID', Number(ID)).update(reqbody);

    const category: ICategory = await knex('category').where('ID', updatedCategory).first();

    Api.sendSuccess<ICategory>(req, res, category);
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

    await knex('category').where('ID', Number(ID)).del();

    Api.sendSuccess<number>(req, res, ID);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
