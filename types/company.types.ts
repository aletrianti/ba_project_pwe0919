export interface ICompany {
  ID: number;
  name: string;
  companyCode: string;
  companySize: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICompanyEmployee {
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
  title: string;
  // description: string;
  example: string;
  customTaskName: string;
  customTaskDescription: string;
}

export interface IEmployeeTable {
  ID: number;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  assignedBuddy: number;
  availableToBuddy: boolean;
  departmentId: number;
  title: string;
  buddyFirstName: string;
  buddyLastName: string;
  buddyEmail: string;
  departmentName: string;
}

export interface IBuddyTable {
  label: string;
  value: number;
}
