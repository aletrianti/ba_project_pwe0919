import { Router, Request, Response } from 'express';
import { jwtMW } from '../..';
import {
  ICurrentUser,
  ILoginInput,
  INewCompanyInput,
  INewEmployees,
  ISignUpUser,
  IUpdatedUser,
  IUser,
} from '../../types/auth.types';
import { ICompany } from '../../types/company.types';
import { IDepartment } from '../../types/department.types';
import { IRole } from '../../types/role.types';
import { updateUser } from '../controllers/user';
import knex from '../knex';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import { Api, dateDB, generateRandomCode, getUserIds } from '../utils';

var router = Router();
const sendmail = require('sendmail')();

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

    const userRole: IRole = user.roleId ? await knex('role').where('ID', user.roleId).first() : '';
    const userDepartment: IDepartment = user.departmentId ? await knex('department').where('ID', user.departmentId).first() : '';

    const signupUser = {
      token: jwt.sign({ userId: user.ID, companyId: companyID }, process.env.JWT_SECRET),
      user: user,
      userRole: userRole,
      userDepartment: userDepartment,
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

    console.log(req.body);
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
    const [user, company]: [IUser[], ICompany] = await Promise.all([
      knex('user').whereIn('ID', createdUsers),
      knex('company').where('ID', Number(companyId)).first(),
    ]);

    sendmail(
      {
        from: 'info@hoppin.com',
        to: `${newUsers.toString()}`,
        subject: `Welcome to ${company.name}`,
        html: `<p>Hi,</p>
              <p>We are really excited to work with you at ${company.name}. To join the team create aprofile <a href="https://hoppin.herokuapp.com/sign-up">here</a>, don't forget to user the company code: ${company.companyCode}.</p>
              <p>Kind regards,</p>
              <p>${company.name}.</p>
        `,
      },
      function (err, reply) {
        // console.log(err && err.stack);
        // console.dir(reply);
      }
    );

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
    userData.active = true;

    const updatedUser = await updateUser(userData, Number(userToUpdate.ID));

    const userRole: IRole = updatedUser.roleId ? await knex('role').where('ID', updatedUser.roleId).first() : '';
    const userDepartment: IDepartment = updatedUser.departmentId
      ? await knex('department').where('ID', updatedUser.departmentId).first()
      : '';

    const signupUser = {
      token: jwt.sign({ userId: updatedUser.ID, companyId: company }, process.env.JWT_SECRET),
      user: updatedUser,
      userRole: userRole,
      userDepartment: userDepartment,
    };

    Api.sendSuccess<ISignUpUser>(req, res, signupUser);
  } catch (err) {
    console.error(err);
    Api.sendError(req, res, err);
  }
});

router.post('/update-user', jwtMW, async (req: Request, res: Response, next) => {
  try {
    const userToUpdate = req.body;
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const updatedUser = await updateUser(userToUpdate, Number(userId));

    const userRole: IRole = updatedUser.roleId ? await knex('role').where('ID', updatedUser.roleId).first() : '';
    const userDepartment: IDepartment = updatedUser.departmentId
      ? await knex('department').where('ID', updatedUser.departmentId).first()
      : '';

    const signupUser = {
      user: updatedUser,
      userRole: userRole,
      userDepartment: userDepartment,
    };

    Api.sendSuccess<IUpdatedUser>(req, res, signupUser);
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

    const userRole: IRole = user.roleId ? await knex('role').where('ID', user.roleId).first() : '';
    const userDepartment: IDepartment = user.departmentId ? await knex('department').where('ID', user.departmentId).first() : '';

    const loginUser = {
      token: jwt.sign({ userId: user.ID, companyId: user.companyId }, process.env.JWT_SECRET),
      user: user,
      userRole: userRole,
      userDepartment: userDepartment,
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

router.post('/update-password', jwtMW, async (req: Request, res: Response, next) => {
  try {
    const { password } = req.body;
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await knex('user').where('ID', userId).update({
      password: hashedPassword,
    });

    const updatedPassword = {
      token: '',
    };

    Api.sendSuccess<any>(req, res, updatedPassword);
  } catch (err) {
    console.error(err);
    Api.sendError(req, res, err);
  }
});

router.get('/current-user', jwtMW, async (req, res, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const user: IUser = await knex('user').where('ID', userId).first();
    const company: ICompany = await knex('company').where('ID', companyId).first();

    const currentUser = {
      user,
      companyName: company.name,
    };

    Api.sendSuccess<ICurrentUser>(req, res, currentUser);
  } catch (err) {
    console.error(err);
    Api.sendError(req, res, err);
  }
});

router.get('/delete', jwtMW, async (req, res, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const user: IUser = await knex('user').where('ID', userId).update({
      active: false,
      updatedAt: dateDB(),
    });

    Api.sendSuccess<IUser>(req, res, user);
  } catch (err) {
    console.error(err);
    Api.sendError(req, res, err);
  }
});

router.post('/delete-employee', jwtMW, async (req, res, next) => {
  try {
    const { userId, companyId } = getUserIds(req);
    if (!userId) throw new Error('User does not exists');
    if (!companyId) throw new Error('User not assigned to a company');

    const user: IUser = await knex('user').where('ID', Number(req.body.id)).update({
      active: false,
      updatedAt: dateDB(),
    });

    Api.sendSuccess<IUser>(req, res, user);
  } catch (err) {
    console.error(err);
    Api.sendError(req, res, err);
  }
});

module.exports = router;
