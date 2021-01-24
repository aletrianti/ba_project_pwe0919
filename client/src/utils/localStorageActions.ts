// localStorage
import { AxiosResponse } from 'axios';
import { IProfile } from '../store/interfaces/members.interfaces';

export const storeTokenInLocalStorage = (res: AxiosResponse<any>): void => {
  const user = res.data.user;
  const role = res.data.userRole;
  const department = res.data.userDepartment;

  const isAdmin = user.isAdmin === 0 ? false : true;
  const availability = user.availableToBuddy === 0 ? false : true;

  const currentUser: IProfile = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
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

export const updateCurrentUserInLocalStorage = (res: AxiosResponse<any>): void => {
  const user = res.data.user;
  const role = res.data.userRole;
  const department = res.data.userDepartment;

  const isAdmin = user.isAdmin === 0 ? false : true;
  const availability = user.availableToBuddy === 0 ? false : true;

  const currentUser: IProfile = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
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

export const removeAllItemsFromLocalStorage = (): void => {
  localStorage.clear();
};

export const httpRequestsConfig = {
  headers: { Authorization: `Bearer ${localStorage['user_token']}` },
};

export const isCurrentUserAnAdmin: boolean = localStorage['current_user'] ? JSON.parse(localStorage['current_user']).isAdmin : false;

export const reloadPageAfterSignIn = (): void => {
  if (localStorage['hasJustSignedIn'] === 'true') {
    localStorage.removeItem('hasJustSignedIn');
    window.location.reload();
  }
};
