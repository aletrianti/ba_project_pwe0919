import { Router, Request, Response } from 'express';
import { IFaq, IFAQInput } from '../../types/faq.types';
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

    const faq: IFaq = await await knex('faq').where('companyId', companyId).insert({
      question: body.question,
      answer: body.answer,
      companyId: companyId,
      categoryId: 1,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });
    console.log(faq);

    Api.sendSuccess<IFaq>(req, res, faq);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
