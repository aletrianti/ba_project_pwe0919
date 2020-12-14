import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');

export const dateDB = (d?: Date | string) => {
  d = d ? d : new Date();
  let date = new Date(d).toISOString();
  date = date.replace('T', ' ').replace('Z', '');
  return date;
};

class _Api {
  sendSuccess = <T>(req: Request, res: Response, data: T) => {
    return res.status(200).json(data);
  };

  sendError = (req: Request, res: Response, error) => {
    const errObj = {
      type: error.name || 'error',
      message: error.message,
      status: error.status || 500,
    };

    return res.status(error.status || 500).json(errObj);
  };
}
export const Api = new _Api();

export function getAuthorizationToken(req: Request) {
  const Authorization = req.get('Authorization');
  if (Authorization) {
    return Authorization.replace('Bearer ', '');
  }

  throw new Error();
}

export function getUserIds(req: Request) {
  const token = getAuthorizationToken(req);
  const { userId, companyId } = jwt.verify(token, process.env.JWT_SECRET);
  if (userId)
    return {
      userId,
      companyId,
    };

  throw new Error();
}

export function generateRandomCode(length: number) {
  var result: string = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
