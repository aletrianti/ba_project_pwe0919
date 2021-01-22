// HTTP Requests

import axios from 'axios';
import store from '../index';
import { ICompanyTask } from '../../../types/companyTask.types';
import { SET_TASK_FOUR, SET_TASK_ONE, SET_TASK_THREE, SET_TASK_TWO } from '../store/actions/tasks/tasks.types';
import { httpRequestsConfig, storeTokenInLocalStorage, updateCurrentUserInLocalStorage } from './localStorageActions';
import { IAssignedTask } from '../../../types/assignedTask.types';
import { goToNextStep } from './changeFormStep';

// Company Tasks
export const getTasks = async () => {
  return await axios.get('/api/companytask', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const storeTasks = async (): Promise<void> => {
  const tasks: ICompanyTask[] = await getTasks();

  if (tasks) tasks.forEach(task => {
    if (task.taskID === 1)
      store.dispatch({ type: SET_TASK_ONE, payload: { ...store.getState().taskOne, deadline: task.deadline } });
    if (task.taskID === 2)
      store.dispatch({ type: SET_TASK_TWO, payload: { ...store.getState().taskTwo, deadline: task.deadline } });
    if (task.taskID === 3)
      store.dispatch({ type: SET_TASK_THREE, payload: { ...store.getState().taskThree, deadline: task.deadline } });
    if (task.taskID === 4)
      store.dispatch({ type: SET_TASK_FOUR, payload: { ...store.getState().taskFour, deadline: task.deadline } });
  });
};
export const postCompanyTask = async (data: any): Promise<any> => {
  return await axios.post('/api/companytask', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};

// Achievements
export const getAchievements = async (): Promise<any> => {
  return await axios.get('/api/company-achievement', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const postAchievement = async (data: any): Promise<any> => {
  return await axios.post('/api/company-achievement', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};
export const updateAchievement = async (data: any): Promise<any> => {
  return await axios.post('/api/company-achievement/update', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};
export const deleteAchievement = async (data: any): Promise<any> => {
  return await axios.post('/api/company-achievement/delete', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};

// Categories
export const getCategories = async (): Promise<any> => {
  return await axios.get('/api/category', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getCategory = async (id: number): Promise<any> => {
  return await axios.get(`/api/category/specific/${id}`, httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const postCategory = async (data: any): Promise<any> => {
  return await axios.post('/api/category', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};
export const updateCategory = async (data: any): Promise<any> => {
  return await axios.post('/api/category/update', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};
export const deleteCategory = async (data: any): Promise<any> => {
  return await axios.post('/api/category/delete', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};

// Departments
export const getDepartmentsTableInfo = async (): Promise<any> => {
  return await axios.get('/api/department/table', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getDepartments = async (): Promise<any> => {
  return await axios.get('/api/department', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getCompanyDepartments = async (): Promise<any> => {
  return await axios.get('/api/department/company-view', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getDepartment = async (id: number): Promise<any> => {
  return await axios.get(`/api/department/specific/${id}`, httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const postDepartment = async (data: any): Promise<any> => {
  return await axios.post('/api/department', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};
export const updateDepartment = async (data: any): Promise<any> => {
  return await axios.post('/api/department/update', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};
export const deleteDepartment = async (data: any): Promise<any> => {
  return await axios.post('/api/department/delete', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};

// FAQ
export const getFAQs = async (): Promise<any> => {
  return await axios.get('/api/faq', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const postFAQ = async (data: any): Promise<any> => {
  return await axios.post('/api/faq', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};
export const updateFAQ = async (data: any): Promise<any> => {
  return await axios.post('/api/faq/update', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};
export const deleteFAQ = async (data: any): Promise<any> => {
  return await axios.post('/api/faq/delete', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};

// Roles
export const getRolesTableInfo = async (): Promise<any> => {
  return await axios.get('/api/role/table', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getRolesResponsibilities = async (): Promise<any> => {
  return await axios.get('/api/role/responsibilities/admin', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getRolesResponsibilitiesCompany = async (): Promise<any> => {
  return await axios.get('/api/role/responsibilities', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getRole = async (id: number): Promise<any> => {
  return await axios.get(`/api/role/specific/${id}`, httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};

// Users
export const getBuddiesTableInfo = async (): Promise<any> => {
  return await axios.get('/api/company/buddy-table', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getEmployees = async (): Promise<any> => {
  return await axios.get('/api/company/employees', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const getCompanyEmployees = async (): Promise<any> => {
  return await axios.get('/api/company', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const postEmployee = async (data: any): Promise<any> => {
  return await axios.post('/api/auth/invite-employees', data, httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const updateCurrentUserAvailability = async (data: any): Promise<any> => {
  return await axios.post('/api/auth/update-user', data, httpRequestsConfig)
                    .then(res => updateCurrentUserInLocalStorage(res))
                    .catch(err => console.error(err));
};
export const deleteEmployee = async (data: any): Promise<any> => {
  return await axios.post('/api/auth/delete-employee', data, httpRequestsConfig)
                    .catch(err => console.error(err));
};

// Dashboard
export const getAssignedTasks = async (): Promise<any> => {
  return await axios.get('/api/assignedtask', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const submitAssignedTask = async (data: any): Promise<any> => {
  return await axios.post('/api/assignedtask', data, httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};
export const storeAssignedTasks = async (): Promise<void> => {
  const tasks: IAssignedTask[] = await getAssignedTasks();

  if (tasks) tasks.forEach(task => {
    if (task.taskId === 1)
      store.dispatch({ type: SET_TASK_ONE, payload: { ...store.getState().taskOne, isCompleted: task.completed } });
    if (task.taskId === 2)
      store.dispatch({ type: SET_TASK_TWO, payload: { ...store.getState().taskTwo, isCompleted: task.completed } });
    if (task.taskId === 3)
      store.dispatch({ type: SET_TASK_THREE, payload: { ...store.getState().taskThree, isCompleted: task.completed } });
    if (task.taskId === 4)
      store.dispatch({ type: SET_TASK_FOUR, payload: { ...store.getState().taskFour, isCompleted: task.completed } });
  });
};

// Auth
export const getCurrentUser = async (): Promise<any> => {
  return await axios.get('/api/auth/current-user', httpRequestsConfig)
                    .then(res => res.data)
                    .catch(err => console.error(err));
};

// Sign up - Company
export const inviteUsers = async (data: any): Promise<any> => {
  return await axios.post('/api/auth/invite-employees', data)
                    .then(() => console.log('Sent emails!'))
                    .catch(err => console.error(err));
};
export const postCompany = async (data: any): Promise<any> => {
  return await axios.post('/api/auth/register-company', data);
};

// Sign up - Employee
export const registerEmployee = async (data: any, nextStepFunction: any): Promise<any> => {
  return await axios.post('/api/auth/register-employee', data)
                    .then(res => storeTokenInLocalStorage(res))
                    .then(() => nextStepFunction)
                    .catch(err => console.error(err));
};
