export interface ITableUser {
  name: string;
  email: string;
  isAvailableToBuddy: boolean;
  assignedTo: string;
  department: string;
  role: string;
}

export interface ITableAchievement {
  title: string;
  description: string;
  date: string;
}

export interface ITableCategory {
  title: string;
}

export interface ITableDepartment {
  title: string;
}

export interface ITableFAQ {
  question: string;
  answer: string;
}

export interface ITableFAQ {
  question: string;
  answer: string;
}

export interface ITableRolesAndResponsibilities {
  role: string;
  description: string;
  responsibilities: string[];
}
