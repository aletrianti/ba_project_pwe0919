import { Router, Request, Response } from 'express';
import { IDepartment, IDepartmentTable, IDepartmentUpdate, INewDepartmentInput } from '../../types/department.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const departments: IDepartment[] = await knex('department').where({ companyId: companyId, deleted: false });

    Api.sendSuccess<IDepartment[]>(req, res, departments);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.get('/specific/:departmentId', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const department: IDepartment = await knex('department').where('ID', req.params.departmentId).first();

    Api.sendSuccess<IDepartment>(req, res, department);
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

router.post('/update', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const { ID, body }: IDepartmentUpdate = req.body;

    const updatedFaq: IDepartmentUpdate = await knex('department')
      .where({
        companyID: companyId,
        ID: ID,
      })
      .update(body);

    Api.sendSuccess<IDepartmentUpdate>(req, res, updatedFaq);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/delete', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    await knex('department').where('ID', Number(req.body.id)).update('deleted', true);

    Api.sendSuccess<string>(req, res, `CompanyAchievement ${req.body.id} deleted`);
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
      .where({ companyId: companyId, deleted: false });

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

    const departments: IDepartment[] = await knex('department')
      .select('ID as id', 'name as title')
      .where({ companyId: companyId, deleted: false });

    Api.sendSuccess<IDepartment[]>(req, res, departments);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
