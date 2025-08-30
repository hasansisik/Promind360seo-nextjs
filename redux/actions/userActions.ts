import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "@/config";

interface LoginPayload {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: LoginPayload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${server}/auth/login`, {
        email,
        password,
      });

      // Check if user needs verification
      if (data.requiresVerification) {
        return thunkAPI.rejectWithValue("Please verify your email!");
      }

      localStorage.setItem("token", data.user.token);
      
      // Set token in cookie for middleware
      document.cookie = `token=${data.user.token}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Strict`;
      
      return data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const loadUser = createAsyncThunk(
  "user/loadUser",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(`${server}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      return data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "User information could not be loaded");
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(`${server}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    localStorage.removeItem("token");
    
    // Remove token from cookie
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";

    return data.message;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Logout failed");
  }
});



export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (userData: { [key: string]: any }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const body = JSON.stringify(userData);
      const { data } = await axios.post(`${server}/auth/edit-profile`, body, config);
      return data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Profile update failed"
      );
    }
  }
);

export const getWhatsApp = createAsyncThunk(
  "user/getWhatsApp",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${server}/auth/whatsapp`);
      return data.whatsappNumber;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "WhatsApp number could not be loaded"
      );
    }
  }
);
