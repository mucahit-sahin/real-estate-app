import api from "../api/api";
//types
import { loginFormData, registerFormData } from "../types/authTypes";

//register user
const signup = async (formData: registerFormData) => {
  const response = await api.post("user/signup", formData);
  if (response.data) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

//login user
const login = async (formData: loginFormData) => {
  const response = await api.post("user/signin", formData);
  if (response.data) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

//load user
const loadUser = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    api.defaults.headers.common["authorization"] = token;
  } else {
    delete api.defaults.headers.common["authorization"];
  }
  const response = await api.get("user/auth");
  console.log(response.data);
  return response.data;
};

//logout user
const logout = async () => {
  localStorage.removeItem("token");
};

//get profile properties
const getProfileProperties = async (page:number) => {
  const response = await api.get("user/profile/properties?page="+page);
  return response.data;
};

const authServices = {
  signup,
  login,
  logout,
  loadUser,getProfileProperties
};

export default authServices;
