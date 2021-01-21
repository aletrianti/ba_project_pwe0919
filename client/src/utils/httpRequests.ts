// HTTP Requests

import axios from 'axios';
import store from '../index';
import { ICompanyTask } from '../../../types/companyTask.types';
import {
  SET_TASK_FOUR_AS_COMPLETED,
  SET_TASK_ONE_AS_COMPLETED,
  SET_TASK_THREE_AS_COMPLETED,
  SET_TASK_TWO_AS_COMPLETED,
} from '../store/actions/tasks/tasks.types';
import { httpRequestsConfig } from './localStorageActions';

// Company Tasks
export const storeTasksDeadlines = async () => {
  const tasks: ICompanyTask[] = await axios.get('/api/companytask', httpRequestsConfig).then(res => res.data);

  tasks.forEach(task => {
    if (task.taskID === 1)
      store.dispatch({ type: SET_TASK_ONE_AS_COMPLETED, payload: { ...store.getState().taskOne, deadline: task.deadline } });
    if (task.taskID === 2)
      store.dispatch({ type: SET_TASK_TWO_AS_COMPLETED, payload: { ...store.getState().taskTwo, deadline: task.deadline } });
    if (task.taskID === 3)
      store.dispatch({ type: SET_TASK_THREE_AS_COMPLETED, payload: { ...store.getState().taskThree, deadline: task.deadline } });
    if (task.taskID === 4)
      store.dispatch({ type: SET_TASK_FOUR_AS_COMPLETED, payload: { ...store.getState().taskFour, deadline: task.deadline } });
  });
};
export const postCompanyTask = async (data: any): Promise<any> => {
  return await axios.post('/api/companytask', data, httpRequestsConfig);
};

// Achievements
export const getAchievements = async (): Promise<any> => {
  return await axios.get('/api/company-achievement', httpRequestsConfig).then(res => res.data);
};
export const postAchievement = async (data: any): Promise<any> => {
  return await axios.post('/api/company-achievement', data, httpRequestsConfig);
};
export const updateAchievement = async (data: any): Promise<any> => {
  return await axios.post('/api/company-achievement/update', data, httpRequestsConfig);
};
export const deleteAchievement = async (data: any): Promise<any> => {
  return await axios.post('/api/company-achievement/delete', data, httpRequestsConfig);
};

// Categories
export const getCategories = async (): Promise<any> => {
  return await axios.get('/api/category', httpRequestsConfig).then(res => res.data);
};
export const postCategory = async (data: any): Promise<any> => {
  return await axios.post('/api/category', data, httpRequestsConfig);
};
export const updateCategory = async (data: any): Promise<any> => {
  return await axios.post('/api/category/update', data, httpRequestsConfig);
};
export const deleteCategory = async (data: any): Promise<any> => {
  return await axios.post('/api/category/delete', data, httpRequestsConfig);
};

// Departments
export const getDepartmentsTableInfo = async (): Promise<any> => {
  return await axios.get('/api/department/table', httpRequestsConfig).then(res => res.data);
};
export const getDepartments = async (): Promise<any> => {
  return await axios.get('/api/department', httpRequestsConfig).then(res => res.data);
};
export const getCompanyDepartments = async (): Promise<any> => {
  return await axios.get('/api/department/company-view', httpRequestsConfig).then(res => res.data);
};
export const postDepartment = async (data: any): Promise<any> => {
  return await axios.post('/api/department', data, httpRequestsConfig);
};
export const updateDepartment = async (data: any): Promise<any> => {
  return await axios.post('/api/department/update', data, httpRequestsConfig);
};
export const deleteDepartment = async (data: any): Promise<any> => {
  return await axios.post('/api/department/delete', data, httpRequestsConfig);
};

// FAQ
export const getFAQs = async (): Promise<any> => {
  return await axios.get('/api/faq', httpRequestsConfig).then(res => res.data);
};
export const postFAQ = async (data: any): Promise<any> => {
  return await axios.post('/api/faq', data, httpRequestsConfig);
};
export const updateFAQ = async (data: any): Promise<any> => {
  return await axios.post('/api/faq/update', data, httpRequestsConfig);
};
export const deleteFAQ = async (data: any): Promise<any> => {
  return await axios.post('/api/faq/delete', data, httpRequestsConfig);
};

// Roles
export const getRolesTableInfo = async (): Promise<any> => {
  return await axios.get('/api/role/table', httpRequestsConfig).then(res => res.data);
};
export const getRolesResponsibilities = async (): Promise<any> => {
  return await axios.get('/api/role/responsibilities/admin', httpRequestsConfig).then(res => res.data);
};

export const getRolesResponsibilitiesCompany = async (): Promise<any> => {
  return await axios.get('/api/role/responsibilities', httpRequestsConfig).then(res => res.data);
};

// Users
export const getBuddiesTableInfo = async (): Promise<any> => {
  return await axios.get('/api/company/buddy-table', httpRequestsConfig).then(res => res.data);
};
export const getEmployees = async (): Promise<any> => {
  return await axios.get('/api/company/employees', httpRequestsConfig).then(res => res.data);
};
export const getCompanyEmployees = async (): Promise<any> => {
  return await axios.get('/api/company', httpRequestsConfig).then(res => res.data);
};
export const deleteEmployee = async (data: any): Promise<any> => {
  return await axios.post('/api/auth/delete-employee', data, httpRequestsConfig);
};

// Dashboard
export const submitAssignedTask = async (data: any): Promise<any> => {
  return await axios.post('/api/assignedtask', data, httpRequestsConfig);
};

export const gettAssignedTasks = async (): Promise<any> => {
  return await axios.get('/api/assignedtask', httpRequestsConfig);
};

//Auth
export const getCurrentUser = async (): Promise<any> => {
  return await axios.get('/api/auth/current-user', httpRequestsConfig).then(res => res.data);
};
