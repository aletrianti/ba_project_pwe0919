import { Router, Request, Response } from 'express';
import { IFaq, IFAQInput, IFAQUpdate } from '../../types/faq.types';
import knex from '../knex';
import { Api, dateDB, getUserIds } from '../utils';

var router = Router();
router.get('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const faqs: IFaq[] = await knex('faq').where('companyId', companyId);
    Api.sendSuccess<IFaq[]>(req, res, faqs);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const body: IFAQInput = req.body;

    const faq: IFaq = await knex('faq').where('companyId', companyId).insert({
      question: body.question,
      answer: body.answer,
      companyId: companyId,
      categoryId: 1,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    Api.sendSuccess<IFaq>(req, res, faq);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/update', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const { ID, body }: IFAQUpdate = req.body;

    const updatedFaq: IFaq = await knex('faq')
      .where({
        companyID: companyId,
        ID: ID,
      })
      .update(body);

    Api.sendSuccess<IFaq>(req, res, updatedFaq);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/delete', async (req: Request, res: Response, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    await knex('faq')
      .where({
        companyID: companyId,
        ID: req.body.id,
      })
      .del();

    Api.sendSuccess<string>(req, res, `FAQ ${req.body.id} deleted`);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
