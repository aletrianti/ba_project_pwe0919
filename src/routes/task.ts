import { Router, Request, Response } from 'express';
import { IUser } from '../../types/auth.types';
import { IRole } from '../../types/role.types';
import { IAssignedTask, ICompanyTask, ITask, ITaskAssignedToCompanyInput, IUserTask } from '../../types/task.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();

router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const user: IUser = await knex('user').where('ID', userId).first();

    const [tasks, role]: [ITask[], IRole] = await Promise.all([
      await knex('task'),
      await knex('role').where('ID', user.roleId).first(),
    ]);

    const userTasks: IUserTask[] = [];

    tasks.forEach(async task => {
      const [assignedTask, companyTask]: [IAssignedTask, ICompanyTask] = await Promise.all([
        await knex('assignedTask').where({ userId: userId, taskId: task.ID }).first(),
        await knex('companyTask').where({ companyId: companyId, taskId: task.ID }).first(),
      ]);

      if (task.ID === 5) {
        const taskToPush: IUserTask = {
          userId: userId,
          taskName: role ? role.customTaskName : '',
          taskDescription: role ? role.customTaskDescription : '',
          deadline: companyTask ? companyTask.deadline : 'No deadline',
          completed: assignedTask.completed,
        };
        userTasks.push(taskToPush);
      } else {
        const taskToPush: IUserTask = {
          userId: userId,
          taskName: task.name,
          taskDescription: task.description,
          deadline: companyTask ? companyTask.deadline : 'No deadline',
          completed: assignedTask.completed,
        };
        userTasks.push(taskToPush);
      }
    });

    Api.sendSuccess<IUserTask[]>(req, res, userTasks);
  } catch (err) {
    console.log(err);
    Api.sendError(req, res, err);
  }
});

router.post('/company-tasks', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const taskAssignedToCompany: ITaskAssignedToCompanyInput = req.body;

    const createdAssignation = await knex('companyTask').insert({
      taskId: taskAssignedToCompany.taskId,
      companyId,
      deadline: taskAssignedToCompany,
      updatedAt: dateDB(),
    });

    const companyTask: ICompanyTask = await knex('companyTask').where('ID', createdAssignation).first();
    Api.sendSuccess<ICompanyTask>(req, res, companyTask);
  } catch (err) {
    console.log(err);
    Api.sendError(req, res, err);
  }
});

module.exports = router;
