import { Router, Request, Response } from 'express';
import { ITableUser } from '../../client/src/store/interfaces/tables.interfaces';
import { IUser } from '../../types/auth.types';
import { ICompanyEmployee } from '../../types/company.types';
import { IDepartment } from '../../types/department.types';
import { IRole } from '../../types/role.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/employees', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const employees: IUser[] = await knex('user').where({ companyId: companyId, active: true });

    const test: ICompanyEmployee[] = await knex
      .select('*')
      .from('user')
      .leftOuterJoin('role', 'user.roleId', 'role.ID')
      .where('user.companyId', companyId)
      .andWhere('user.active', true);
    console.log(test);

    Api.sendSuccess<ICompanyEmployee[]>(req, res, test);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
