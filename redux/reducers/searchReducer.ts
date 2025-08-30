import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createSearch,
  getUserSearches,
  getSearchStats,
  getSearchById,
  updateSearchStatus,
  deleteSearch,
} from "../actions/searchActions";

interface SearchRecord {
  _id: string;
  url: string;
  sector: string;
  user: string;
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

interface SearchState {
  searches: SearchRecord[];
  currentSearch: SearchRecord | null;
  stats: SearchStats | null;
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  totalSearches: number;
  createLoading: boolean;
  createError: string | null;
}

const initialState: SearchState = {
  searches: [],
  currentSearch: null,
  stats: null,
  loading: false,
  error: null,
  totalPages: 0,
  currentPage: 1,
  totalSearches: 0,
  createLoading: false,
  createError: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchError: (state) => {
      state.error = null;
      state.createError = null;
    },
    clearCurrentSearch: (state) => {
      state.currentSearch = null;
    },
    resetSearchState: (state) => {
      state.searches = [];
      state.currentSearch = null;
      state.stats = null;
      state.loading = false;
      state.error = null;
      state.totalPages = 0;
      state.currentPage = 1;
      state.totalSearches = 0;
      state.createLoading = false;
      state.createError = null;
    },
  },
  extraReducers: (builder) => {
    // Create Search
    builder
      .addCase(createSearch.pending, (state) => {
        state.createLoading = true;
        state.createError = null;
      })
      .addCase(createSearch.fulfilled, (state, action: PayloadAction<SearchRecord>) => {
        state.createLoading = false;
        state.searches.unshift(action.payload);
        state.totalSearches += 1;
      })
      .addCase(createSearch.rejected, (state, action) => {
        state.createLoading = false;
        state.createError = action.payload as string;
      });

    // Get User Searches
    builder
      .addCase(getUserSearches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserSearches.fulfilled, (state, action) => {
        state.loading = false;
        state.searches = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.totalSearches = action.payload.totalSearches;
      })
      .addCase(getUserSearches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Get Search Stats
    builder
      .addCase(getSearchStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSearchStats.fulfilled, (state, action: PayloadAction<SearchStats>) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(getSearchStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Get Search By ID
    builder
      .addCase(getSearchById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSearchById.fulfilled, (state, action: PayloadAction<SearchRecord>) => {
        state.loading = false;
        state.currentSearch = action.payload;
      })
      .addCase(getSearchById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Update Search Status
    builder
      .addCase(updateSearchStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSearchStatus.fulfilled, (state, action: PayloadAction<SearchRecord>) => {
        state.loading = false;
        // Update the search in the list
        const index = state.searches.findIndex(search => search._id === action.payload._id);
        if (index !== -1) {
          state.searches[index] = action.payload;
        }
        // Update current search if it's the same
        if (state.currentSearch && state.currentSearch._id === action.payload._id) {
          state.currentSearch = action.payload;
        }
      })
      .addCase(updateSearchStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Delete Search
    builder
      .addCase(deleteSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSearch.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        // Remove the search from the list
        state.searches = state.searches.filter(search => search._id !== action.payload);
        state.totalSearches -= 1;
        // Clear current search if it's the deleted one
        if (state.currentSearch && state.currentSearch._id === action.payload) {
          state.currentSearch = null;
        }
      })
      .addCase(deleteSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSearchError, clearCurrentSearch, resetSearchState } = searchSlice.actions;
export default searchSlice.reducer;
