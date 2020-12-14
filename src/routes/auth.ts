import { Router, Request, Response } from 'express';
import { jwtMW } from '../..';
import knex from '../knex';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// import { jwtMW } from '../..'
import { Api, dateDB } from '../utils';

var router = Router();
router.post('/register-company', async (req: Request, res: Response, next) => {
  try {
    const { companyName, newRole, newUser, password, rt }: any = req.body;

    const companyExists = await knex('company').where('name', companyName).first();

    if (companyExists) throw new Error(`${companyName} already exists`);

    const company = await knex('company').insert({
      name: companyName,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const role = await knex('role').insert({
      title: newRole.title,
      companyId: Number(company),
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await knex('user').insert({
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      companyId: Number(company),
      password: hashedPassword,
      roleId: Number(role),
      active: true,
      isAdmin: true,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const user = await knex('user').where('ID', createdUser).first();

    const signupUser = {
      token: jwt.sign({ userId: user.ID, companyId: company }, process.env.JWT_SECRET),
      user: user,
    };

    Api.sendSuccess<any>(req, res, signupUser);
  } catch (err) {
    Api.sendError(req, res, err, { log: { err, body: req.body } });
  }
});

router.post('/login', async (req: Request, res: Response, next) => {
  try {
    const { email, password }: any = req.body;

    const user = await knex('user').where('email', email).first();

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new Error(`Invalid password for email ${email}`);

    const loginUser = {
      token: jwt.sign({ userId: user.ID, hotelId: user.hotelID }, process.env.JWT_SECRET),
      user: user,
    };

    Api.sendSuccess<any>(req, res, loginUser, { noLog: true });
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.get('/test', jwtMW, async (req, res, next) => {
  res.send('XD');
});

module.exports = router;
