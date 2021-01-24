import { IDepartment } from './department.types';
import { IRole } from './role.types';

export interface IUser {
  ID: number;
  companyId: number;
  email: string;
  password?: string;
  roleId?: number;
  departmentId?: string;
  active: boolean;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  firstName?: string;
  lastName?: string;
  birthday?: string;
  atCompanySince?: string;
  description?: string;
  contactLink?: string;
  coverImageUrl?: string;
  profileImageUrl?: string;
  availableToBuddy: boolean;
  assignedBuddy?: number;
}

export interface ISignUpUser {
  token: string;
  user: IUser;
  userRole: IRole;
  userDepartment: IDepartment;
}

export interface IUpdatedUser {
  user: IUser;
  userRole: IRole;
  userDepartment: IDepartment;
}

export interface IUpdateUser {
  user: IUser;
}

export interface INewCompanyInput {
  company: {
    companyName: string;
    companySize: string;
  };
  newRole: {
    title: string;
  };
  newUser: {
    email: string;
    firstName: string;
    lastName: string;
  };
  password: string;
}

export interface INewEmployees {
  newUsers: string[];
  companyId: string;
}

export interface INewEmployeeInput {
  companyCode: string;
  email: string;
  userData: {
    firstName: string;
    lastName: string;
  };
  password: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}
 export interface ICurrentUser { 
   user: IUser
   companyName: string
 }
