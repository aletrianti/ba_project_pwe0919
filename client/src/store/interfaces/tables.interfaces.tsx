export interface ITableUser {
  id: number;
  name: string;
  email: string;
  isAvailableToBuddy: boolean;
  assignedTo: string;
  department: string;
  role: string;
}

export interface ITableAchievement {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface ITableCategory {
  id: number;
  title: string;
}

export interface ITableDepartment {
  id: number;
  title: string;
}

export interface ITableFAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ITableFAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ITableRolesAndResponsibilities {
  id: number;
  role: string;
  description: string;
  responsibilities: string[];
}

export interface ITableDocuments {
  id: number;
  filename: string;
  created: string;
}

export interface ITableDocumentsContent {
  category: ITableCategory;
  data: ITableDocuments[];
}
