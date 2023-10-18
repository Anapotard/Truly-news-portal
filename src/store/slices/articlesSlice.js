import { createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from '../thunks/fetchArticles';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    isLoading: false,
    error: null
  },

  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload.response.docs;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const articlesReducer = articlesSlice.reducer;
