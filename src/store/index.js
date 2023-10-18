import { configureStore } from '@reduxjs/toolkit';
//import { setupListeners } from '@reduxjs/toolkit/query'; // RTK Query only
import { articlesReducer } from './slices/articlesSlice';
import { articlePageReducer } from './slices/articlePageSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    article: articlePageReducer
  },
});

//setupListeners(store.dispatch);

export * from './thunks/fetchArticles';
export * from './thunks/fetchArticleDetails';
