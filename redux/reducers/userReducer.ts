import { createReducer } from "@reduxjs/toolkit";
import { login, loadUser, logout, editProfile, getWhatsApp } from "../actions/userActions";

interface UserState {
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    user: any;
    message: string | null;
    whatsappNumber: string;
}

const initialState: UserState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: null,
    message: null,
    whatsappNumber: "905555555555",
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        // Login
        .addCase(login.pending, (state) => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string | null;
        })
        // Load User
        .addCase(loadUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(loadUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        })
        .addCase(loadUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string | null;
        })
        // Logout
        .addCase(logout.pending, (state) => {
            state.loading = true;
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.message = action.payload;
        })
        .addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string | null;
        })
        // Edit Profile
        .addCase(editProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
        })
        .addCase(editProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.message = 'Profil başarıyla güncellendi.';
        })
        .addCase(editProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string | null;
        })
        // Get WhatsApp
        .addCase(getWhatsApp.pending, (state) => {
            state.loading = true;
        })
        .addCase(getWhatsApp.fulfilled, (state, action) => {
            state.loading = false;
            state.whatsappNumber = action.payload;
        })
        .addCase(getWhatsApp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string | null;
        })
    // Error
    builder.addCase("clearError", (state) => {
        state.error = null;
    });
    builder.addCase("clearMessage", (state) => {
        state.message = null;
    });
});