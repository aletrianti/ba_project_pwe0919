// localStorage
import { AxiosResponse } from 'axios';
import { IUser } from '../../../types/auth.types';

export const storeTokenInLocalStorage = (res: AxiosResponse<any>) => {
  localStorage['user_token'] = res.data.token;
  localStorage['current_user'] = JSON.stringify(res.data.user);
};

export const updateCurrentUserInLocalStorage = (res: AxiosResponse<any>) => {
  localStorage.setItem('current_user', JSON.stringify(res.data.user));
};

export const removeAllItemsFromLocalStorage = () => {
  localStorage.clear();
};

export const getTokenFromLocalStorage = (): string => localStorage['user_token'];

export const getUserInfoFromLocalStorage = (): IUser => JSON.parse(localStorage['current_user']);
