import axios from "axios";
//types
import { loginFormData, registerFormData } from "../types/authTypes";

const API_URL = "http://localhost:5000/api/v1/user/";

//register user
const signup = async (formData: registerFormData) => {
  const response = await axios.post(API_URL + "signup", formData);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response.data;
};

//login user
const login = async (formData: loginFormData) => {
  const response = await axios.post(API_URL + "signin", formData);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response.data;
};

//load user
const loadUser = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    const response = await axios.get(API_URL + "auth", {
      headers: {
        authorization: token,
      },
    });
    console.log(response.data);
    return response.data;
  }
  return null;
};

//logout user
const logout = async () => {
  localStorage.removeItem("token");
};

const authServices = {
  signup,
  login,
  logout,
  loadUser,
};

export default authServices;
