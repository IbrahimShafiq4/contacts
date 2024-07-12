export interface IContacts {
  userId: null | number;
  email: string;
  username: null | string;
  mobileNumber: string;
  firstName: string;
  lastName: string;
  id: string;
  image?: string;
}

export interface IAddContact {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  mobileNumber: string;
}
