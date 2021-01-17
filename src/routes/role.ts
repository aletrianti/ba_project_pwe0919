import { Router, Request, Response } from 'express';
import { IUser } from '../../types/auth.types';
import { INewRoleInput, IRole, IRoleTable } from '../../types/role.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const roles: IRole[] = await knex('role').where('companyId', companyId);
    Api.sendSuccess<IRole[]>(req, res, roles);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    console.log(req);
    console.log(userId);
    console.log(companyId);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');
    const newRoleTitle: INewRoleInput = req.body;

    const roleExists: IRole = await knex('role').where('title', newRoleTitle).first();
    if (roleExists) throw Error(`${roleExists.title} already exists for company: ${companyId}`);

    const newRole = await knex('role').insert({
      title: newRoleTitle,
      companyId: companyId,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const role = await knex('role').where('ID', newRole).first();

    Api.sendSuccess<IRole>(req, res, role);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});
router.get('/employees/:roleId', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const employeesByRole: IUser[] = await knex('user').where('roleId', Number(req.params.roleId));
    Api.sendSuccess<IUser[]>(req, res, employeesByRole);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.get('/table', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const roles: IRoleTable[] = await knex('role').select('ID as value', 'title as label').where('companyId', companyId);

    console.log(roles);

    Api.sendSuccess<IRoleTable[]>(req, res, roles);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

// Add roles to category --> relation table
// That route will take roleId and an array of CategoryID

// Create categories first
module.exports = router;
