// Roles and responsibilities

export interface IResponsibility {
  text: string;
}

export interface IRole {
  title: string;
  description: string;
  responsibilities: IResponsibility[];
}
