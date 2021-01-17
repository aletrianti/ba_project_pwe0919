import { Router, Request, Response } from 'express';
import { ITableUser } from '../../client/src/store/interfaces/tables.interfaces';
import { IUser } from '../../types/auth.types';
import { ICompanyEmployee, IEmployeeTable } from '../../types/company.types';
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

    const employees: IEmployeeTable[] = await knex('user as user1')
      .select(
        'user1.ID',
        'user1.firstName',
        'user1.lastName',
        'user1.email',
        'user1.roleId',
        'user1.assignedBuddy',
        'user1.availableToBuddy',
        'user1.departmentId',
        'role.title',
        'user2.firstName as buddyFirstName',
        'user2.lastName as buddyLastName',
        'user2.email as buddyEmail',
        'department.name as departmentName'
      )
      .leftJoin('role', 'user1.roleId', 'role.ID')
      .leftJoin('user as user2', 'user1.assignedBuddy', 'user2.ID')
      .leftJoin('department', 'user1.departmentId', 'department.ID')
      .where('user1.companyId', companyId)
      .andWhere('user1.active', true);

    Api.sendSuccess<IEmployeeTable[]>(req, res, employees);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
