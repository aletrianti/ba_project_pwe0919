// Members

export interface IMember {
  fullName: string;
  jobTitle: string;
  department?: string;
  birthday?: string; // Date
  memberSince?: string; // Date
  description?: string;
  profilePicture?: any; // ?
}

export interface IMemberCompany extends IMember {
  firstName: string;
  lastName: string;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  jobTitle: string;
  department?: string;
  birthday?: string; // Date
  memberSince?: string; // Date
  description?: string;
  profilePicture?: any; // ?
  isAvailable: boolean;
  isAdmin: boolean;
}
