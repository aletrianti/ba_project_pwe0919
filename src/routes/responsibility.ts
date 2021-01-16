import { Router, Request, Response } from 'express';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const responsibilities: IResponsibility[] = await knex('responsibility').where('companyId', companyId);
    Api.sendSuccess<IResponsibility[]>(req, res, responsibilities);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');
    const newResponsibilityInput: IResponsibilityInput = req.body;

    const newResponsibility = await knex('responsibility').insert({
      description: newResponsibilityInput.description,
      roleId: newResponsibilityInput.roleId,
      companyId: companyId,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const responsibility = await knex('responsibility').where('ID', newResponsibility).first();

    Api.sendSuccess<IResponsibility>(req, res, responsibility);
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

    await knex('responsibility').where('ID', Number(ID)).del();

    Api.sendSuccess<number>(req, res, ID);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
