import { createSlice } from '@reduxjs/toolkit';
import { fetchArticleDetails } from '../thunks/fetchArticleDetails';

const articlePageSlice = createSlice({
  name: 'article',
  initialState: {
    article: null,
    isLoading: false,
    error: null
  },

  extraReducers(builder) {
    builder
      .addCase(fetchArticleDetails.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.article = action.payload;
        state.error = null;
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const articlePageReducer = articlePageSlice.reducer;
