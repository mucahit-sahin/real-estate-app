import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authServices from "../../services/authServices";
import {
  UserState,
  registerFormData,
  loginFormData,
} from "../../types/authTypes";

const initialState: UserState = {
  data: null,
  profileProperties: null,
  loading: false,
  error: "",
} as UserState;

export const signup = createAsyncThunk(
  "auth/signup",
  async (user: registerFormData, thunkAPI) => {
    try {
      return await authServices.signup(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: loginFormData, thunkAPI) => {
    try {
      return await authServices.login(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadUser = createAsyncThunk("auth/loadUser", async (thunkAPI) => {
  try {
    return await authServices.loadUser();
  } catch (error: any) {
    return;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authServices.logout();
});

export const getProfileProperties = createAsyncThunk(
  "auth/getProfileProperties",
  async (thunkAPI) => {
    try {
      return await authServices.getProfileProperties();
    } catch (error: any) {
      return;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.error = "Signup failed";
      state.loading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.error = "Login failed";
      state.loading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.data = null;
    });
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(loadUser.rejected, (state) => {
      state.error = "Load user failed";
      state.loading = false;
    });
    builder.addCase(getProfileProperties.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfileProperties.fulfilled, (state, action) => {
      state.profileProperties = action.payload.properties;
      state.loading = false;
    });
    builder.addCase(getProfileProperties.rejected, (state) => {
      state.error = "Load User Properties failed";
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
