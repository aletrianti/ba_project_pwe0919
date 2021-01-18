export interface ICompanyAchievement {
  ID: number;
  name: string;
  description: string;
  companyId: number;
  createAt: string;
  updatedAt: string;
  date: string;
}
export interface INewCompanyAchievementInput {
  name: string;
  description: string;
  date: string;
}
