import { Router, Request, Response } from 'express';
import { IDepartment, IDepartmentTable, INewDepartmentInput } from '../../types/department.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const departments: IDepartment[] = await knex('department').where('companyId', companyId);

    Api.sendSuccess<IDepartment[]>(req, res, departments);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');
    const newDepartmentName: INewDepartmentInput = req.body;

    const departmentExists: IDepartment = await knex('department')
      .where({ companyId: companyId, name: newDepartmentName.name })
      .first();
    if (departmentExists) throw Error(`${departmentExists.name} already exists for company: ${companyId}`);

    const newDepartment = await knex('department').insert({
      name: newDepartmentName.name,
      companyId: companyId,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const department = await knex('department').where('ID', newDepartment).first();

    Api.sendSuccess<IDepartment>(req, res, department);
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

    await knex('department').where('ID', Number(ID)).del();

    Api.sendSuccess<number>(req, res, ID);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.get('/table', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const departments: IDepartmentTable[] = await knex('department')
      .select('ID as value', 'name as label')
      .where('companyId', companyId);

    Api.sendSuccess<IDepartmentTable[]>(req, res, departments);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.get('/company-view', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const departments: IDepartment[] = await knex('department').select('ID as id', 'name as title').where('companyId', companyId);

    Api.sendSuccess<IDepartment[]>(req, res, departments);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
