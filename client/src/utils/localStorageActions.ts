// localStorage
import axios, { AxiosResponse } from 'axios';
import { IProfile } from '../store/interfaces/members.interfaces';

export const storeTokenInLocalStorage = (res: AxiosResponse<any>) => {
  const user = res.data.user;
  const role = res.data.userRole;
  const department = res.data.userDepartment;

  const isAdmin = user.isAdmin === 0 ? false : true;
  const availability = user.availableToBuddy === 0 ? false : true;

  const currentUser: IProfile = {
    firstName: user.firstName,
    lastName: user.lastName,
    jobTitle: role.title,
    department: department !== '' ? department.name : department,
    birthday: user.birthday,
    memberSince: user.atCompanySince,
    description: user.description,
    profilePicture: user.profileImageUrl,
    isAdmin: isAdmin,
    isAvailable: availability,
  };

  localStorage['user_token'] = res.data.token;
  localStorage['current_user'] = JSON.stringify(currentUser);

  // console.log('Stored token.');
};

export const updateCurrentUserInLocalStorage = (res: AxiosResponse<any>) => {
  const user = res.data.user;
  const role = res.data.userRole;
  const department = res.data.userDepartment;

  const isAdmin = user.isAdmin === 0 ? false : true;
  const availability = user.availableToBuddy === 0 ? false : true;

  const currentUser: IProfile = {
    firstName: user.firstName,
    lastName: user.lastName,
    jobTitle: role.title,
    department: department !== '' ? department.name : department,
    birthday: user.birthday,
    memberSince: user.atCompanySince,
    description: user.description,
    profilePicture: user.profileImageUrl,
    isAdmin: isAdmin,
    isAvailable: availability,
  };

  localStorage.setItem('current_user', JSON.stringify(currentUser));
};

export const updateCurrentUserAvailability = (availability: boolean) => {
  const token = getTokenFromLocalStorage();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .post('/api/auth/update-user', { availableToBuddy: availability }, config)
    .then(res => updateCurrentUserInLocalStorage(res))
    .catch(err => console.error(err));
};

export const removeAllItemsFromLocalStorage = () => {
  localStorage.clear();
};

export const getTokenFromLocalStorage = (): string => localStorage['user_token'];

export const getUserInfoFromLocalStorage = (): IProfile => JSON.parse(localStorage['current_user']);

export const isCurrentUserAnAdmin = (): boolean => getUserInfoFromLocalStorage().isAdmin;
