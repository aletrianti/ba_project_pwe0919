import { Router, Request, Response } from 'express';
import { jwtMW } from '../..';
import { ILoginInput, INewCompanyInput, INewEmployees, ISignUpUser, IUser } from '../../types/auth.types';
import { ICompany } from '../../types/company.types';
import { updateUser } from '../controllers/user';
import knex from '../knex';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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
      availableToBuddy: false,
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
    console.error(err);
    Api.sendError(req, res, err);
  }
});

router.post('/invite-employees', async (req: Request, res: Response, next) => {
  try {
    const { newUsers, companyId }: INewEmployees = req.body;

    const createdUsers: any[] = [];
    newUsers.forEach(async newUser => {
      const userCreated = await knex('user').insert({
        email: newUser,
        companyId: Number(companyId),
        active: false,
        isAdmin: false,
        createdAt: dateDB(),
        updatedAt: dateDB(),
        availableToBuddy: true,
      });

      createdUsers.push(userCreated);
    });
    const user: IUser[] = await knex('user').where('ID', createdUsers);

    Api.sendSuccess<IUser[]>(req, res, user);
  } catch (err) {
    console.error(err);
    Api.sendError(req, res, err);
  }
});

router.post('/register-employee', async (req: Request, res: Response, next) => {
  try {
    const { companyCode, email, userData, password } = req.body;

    const company: ICompany = await knex('company').where('companyCode', companyCode).first();
    if (!company) throw Error(`Doesn't exist company with companyCode ${companyCode}`);

    const userToUpdate: IUser = await knex('user').where('email', email).first();
    if (!userToUpdate) throw Error(`Doesn't exist user with email ${email}`);

    if (userToUpdate.password) throw Error(`User already in use`);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Add hashed password to userData
    userData.password = hashedPassword;

    const updatedUser = await updateUser(userData, Number(userToUpdate.ID));

    const signupUser = {
      token: jwt.sign({ userId: updatedUser.ID, companyId: company }, process.env.JWT_SECRET),
      user: updatedUser,
    };
    Api.sendSuccess<ISignUpUser>(req, res, signupUser);
  } catch (err) {
    console.error(err);
    Api.sendError(req, res, err);
  }
});

router.post('/update-user', jwtMW, async (req: Request, res: Response, next) => {
  try {
    const { userToUpdate } = req.body;
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const updatedUser = await updateUser(userToUpdate, Number(userId));
    Api.sendSuccess<IUser>(req, res, updatedUser);
  } catch (err) {
    console.error(err);
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
    console.error(err);
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
    console.error(err);
    Api.sendError(req, res, err);
  }
});

module.exports = router;
