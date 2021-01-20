import { Router, Request, Response } from 'express';
import { IAssignedTask, IAssignedTaskInput } from '../../types/assignedTask.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const assignedTasks = await knex('assignedtask').where('userId', userId);

    Api.sendSuccess<any>(req, res, assignedTasks);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const body: IAssignedTaskInput = req.body;

    const assignedTask = await knex('assignedtask').insert({
      taskId: body.taskId,
      userId: userId,
      createdAt: dateDB(),
      updatedAt: dateDB(),
      completed: body.completed,
      finishedAt: dateDB(),
    });

    const updatedTask: IAssignedTask = await knex('assignedtask').where('ID', assignedTask);

    // Next code is if the user can change completed (true-false)
    // const taskToUpdate = await knex('assignedtask').where({ userId: userId, taskId: req.body.taskId }).first();

    // if (taskToUpdate) {
    //   const finishedAt = req.body.completed ? dateDB() : undefined;
    //   assignedTask = await knex('assignedtask').where({ userId: userId, taskId: req.body.taskId }).update({
    //     completed: req.body.completed,
    //     updatedAt: dateDB(),
    //     finishedAt,
    //   });
    // } else {
    //   const finishedAt = req.body.completed ? dateDB() : undefined;
    //   assignedTask = await knex('assignedtask').insert({
    //     taskId: req.body.taskId,
    //     userId: userId,
    //     createdAt: dateDB(),
    //     updatedAt: dateDB(),
    //     completed: req.body.completed,
    //     finishedAt,
    //   });
    // }

    Api.sendSuccess<IAssignedTask>(req, res, updatedTask);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
