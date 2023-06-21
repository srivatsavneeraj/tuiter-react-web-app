import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
  "user/login",
  async (credentials) => {
    const user = await authService.login(credentials);
    return user;
  }
);

export const profileThunk = createAsyncThunk("auth/profile", async () => {
  const response = await authService.profile();
  return response;
  // return await authService.profile();
});

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  console.log("Logout");
  return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    await authService.updateUser(user);
    return user;
  }
);
export const registerThunk = createAsyncThunk(
  "user/register",
  async (credentials) => {
    console.log("register thunk");
    console.log(credentials);
    const user = await authService.register(credentials);
    return user;
  }
);
