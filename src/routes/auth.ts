import { Router, Request, Response } from 'express';
import { jwtMW } from '../..';
import { ILoginInput, INewCompanyInput, INewEmployeeInput, ISignUpUser, IUser } from '../../types/auth.types';
import { ICompany } from '../../types/company.types';
import knex from '../knex';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// import { jwtMW } from '../..'
import { Api, dateDB, generateRandomCode, getUserIds } from '../utils';

var router = Router();
router.post('/register-company', async (req: Request, res: Response, next) => {
  try {
    const { company, newRole, newUser, password }: INewCompanyInput = req.body;

    const companyExists = await knex('company').where('name', company.companyName).first();

    if (companyExists) throw new Error(`${company.companyName} already exists`);

    const companyID = await knex('company').insert({
      name: company.companyName,
      companyCode: generateRandomCode(10),
      companySize: company.companySize,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const role = await knex('role').insert({
      title: newRole.title,
      companyId: Number(companyID),
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await knex('user').insert({
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      companyId: Number(companyID),
      password: hashedPassword,
      roleId: Number(role),
      active: true,
      isAdmin: true,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const user: IUser = await knex('user').where('ID', createdUser).first();

    const signupUser = {
      token: jwt.sign({ userId: user.ID, companyId: companyID }, process.env.JWT_SECRET),
      user: user,
    };

    Api.sendSuccess<ISignUpUser>(req, res, signupUser);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/register-employee', async (req: Request, res: Response, next) => {
  try {
    const { companyCode, newUser, password }: INewEmployeeInput = req.body;

    const company: ICompany = await knex('company').where('companyCode', companyCode).first();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await knex('user').insert({
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      companyId: Number(company.ID),
      password: hashedPassword,
      roleId: newUser.roleId,
      departmentId: newUser.departmentId,
      active: true,
      isAdmin: false,
      createdAt: dateDB(),
      updatedAt: dateDB(),
    });

    const user: IUser = await knex('user').where('ID', createdUser).first();

    const signupUser = {
      token: jwt.sign({ userId: user.ID, companyId: company.ID }, process.env.JWT_SECRET),
      user: user,
    };

    Api.sendSuccess<ISignUpUser>(req, res, signupUser);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.post('/login', async (req: Request, res: Response, next) => {
  try {
    const { email, password }: ILoginInput = req.body;

    const user: IUser = await knex('user').where('email', email).first();

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new Error(`Invalid password for email ${email}`);

    const loginUser = {
      token: jwt.sign({ userId: user.ID, companyId: user.companyId }, process.env.JWT_SECRET),
      user: user,
    };

    Api.sendSuccess<ISignUpUser>(req, res, loginUser);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

router.get('/', jwtMW, async (req, res, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const user: IUser = await knex('user').where('ID', userId).first();

    Api.sendSuccess<IUser>(req, res, user);
  } catch (err) {
    Api.sendError(req, res, err);
  }
});

module.exports = router;
