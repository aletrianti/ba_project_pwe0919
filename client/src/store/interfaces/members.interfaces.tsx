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

export interface IProfile {
  fullName: string;
  jobTitle: string;
  department?: string;
  birthday?: string; // Date
  memberSince?: string; // Date
  description?: string;
  profilePicture?: any; // ?
  isAvailable?: boolean;
}
