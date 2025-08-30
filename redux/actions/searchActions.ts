import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "@/config";

interface CreateSearchPayload {
  url: string;
  sector?: string;
}

interface SearchRecord {
  _id: string;
  url: string;
  sector: string;
  user: string | {
    _id: string;
    name: string;
    email: string;
  };
  status: 'completed' | 'failed' | 'pending';
  createdAt: string;
  updatedAt: string;
}

interface SearchStats {
  overall: {
    totalSearches: number;
    completedSearches: number;
    failedSearches: number;
    pendingSearches: number;
  };
  topSectors: Array<{
    _id: string;
    count: number;
  }>;
}

interface SearchListResponse {
  data: SearchRecord[];
  totalPages: number;
  currentPage: number;
  totalSearches: number;
}

// Create a new search record
export const createSearch = createAsyncThunk(
  "search/create",
  async ({ url, sector }: CreateSearchPayload, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await axios.post(
        `${server}/search`,
        { url, sector },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create search record"
      );
    }
  }
);

// Get user's search history
export const getUserSearches = createAsyncThunk(
  "search/getUserSearches",
  async ({ page = 1, limit = 10, status }: { page?: number; limit?: number; status?: string }, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const params = new URLSearchParams();
      if (page) params.append('page', page.toString());
      if (limit) params.append('limit', limit.toString());
      if (status) params.append('status', status);

      const response = await axios.get(
        `${server}/search?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch search history"
      );
    }
  }
);

// Get search statistics
export const getSearchStats = createAsyncThunk(
  "search/getStats",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await axios.get(
        `${server}/search/stats`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch search statistics"
      );
    }
  }
);

// Get a specific search by ID
export const getSearchById = createAsyncThunk(
  "search/getById",
  async (id: string, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await axios.get(
        `${server}/search/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch search details"
      );
    }
  }
);

// Update search status (Public - No Authentication Required)
export const updateSearchStatus = createAsyncThunk(
  "search/updateStatus",
  async ({ id, status }: { id: string; status: 'completed' | 'failed' }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${server}/search/${id}/status`,
        { status }
      );

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update search status"
      );
    }
  }
);

// Delete a search
export const deleteSearch = createAsyncThunk(
  "search/delete",
  async (id: string, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      await axios.delete(
        `${server}/search/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete search"
      );
    }
  }
);
