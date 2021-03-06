import { Property } from "./propertyTypes";

export interface UserState {
  data: UserResponse | null;
  profileProperties: Property[] | null;
  numberofpages: number;
  currentPage: number;
  loading: boolean;
  error: string ;
}

export interface User {
  fullname: string;
  email: string;
  phoneNumber: string;
  profilePicture: string;
}

export interface UserResponse {
  token: string;
  user: User;
}

export interface registerFormData {
    fullname: string;
    email: string;
    phoneNumber: string;
    password: string;
  }
export interface loginFormData {
    email: string;
    password: string;
}