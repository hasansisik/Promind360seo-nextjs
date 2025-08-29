import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "@/config";

interface RegisterPayload {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface ResetPasswordPayload {
  email: string;
  passwordToken: string;
  newPassword: string;
}

interface VerifyEmailPayload {
  email: string;
  verificationCode: string;
}

interface AgainEmailPayload {
  email: string;
}

export const register = createAsyncThunk(
  "user/register",
  async ({ name, surname, email, password }: RegisterPayload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${server}/auth/register`, {
        name,
        surname,
        email,
        password,
      });

      await AsyncStorage.setItem("accessToken", data.user.token);

      return data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);

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

      await AsyncStorage.setItem("accessToken", data.user.token);
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
      const token = await AsyncStorage.getItem("accessToken");

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
    const token = await AsyncStorage.getItem("accessToken");

    const { data } = await axios.get(`${server}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    await AsyncStorage.removeItem("accessToken");

    return data.message;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Logout failed");
  }
});

export const verifyEmail = createAsyncThunk(
  "user/verifyEmail",
  async ({ email, verificationCode }: VerifyEmailPayload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${server}/auth/verify-email`, {
        email,
        verificationCode,
      });

      return data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Verification failed"
      );
    }
  }
);

export const sendEmailChangeVerification = createAsyncThunk(
  "user/sendEmailChangeVerification",
  async (newEmail: string, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${server}/auth/send-email-change-verification`, { newEmail }, config);
      return data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Verification code could not be sent"
      );
    }
  }
);

export const verifyEmailChange = createAsyncThunk(
  "user/verifyEmailChange",
  async (verificationCode: string, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${server}/auth/verify-email-change`, { verificationCode }, config);
      return data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Email verification failed"
      );
    }
  }
);

export const againEmail = createAsyncThunk(
  "user/againEmail",
  async ({ email }: AgainEmailPayload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${server}/auth/again-email`, { email });

      return data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Email could not be sent"
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email: string, thunkAPI) => {
    try {
      const { data } = await axios.post(`${server}/auth/forgot-password`, { email });

      return data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Password reset email could not be sent"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (
    { email, passwordToken, newPassword }: ResetPasswordPayload,
    thunkAPI
  ) => {
    try {
      const { data } = await axios.post(`${server}/auth/reset-password`, {
        email,
        passwordToken,
        newPassword,
      });

      return data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Password reset failed"
      );
    }
  }
);

export const verifyPassword = createAsyncThunk(
  "user/verifyPassword",
  async (password: string, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${server}/auth/verify-password`, { password }, config);
      return data.isValid;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Password verification failed"
      );
    }
  }
);

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (userData: { [key: string]: any }, thunkAPI) => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const body = JSON.stringify(userData);
      const { data } = await axios.post(`${server}/auth/edit-profile`, body, config);
      return data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Profile update failed"
      );
    }
  }
);
