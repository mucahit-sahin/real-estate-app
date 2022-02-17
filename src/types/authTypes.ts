export interface UserState {
  data: UserResponse | null;
  loading: boolean;
  error: string | null;
}

export interface User {
  fullname: string;
  email: string;
  phoneNumber: string;
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