import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchArticleDetails = createAsyncThunk('article/fetchArticleDetails',
async (articleSlug) => {
  const apiKey = 'jk0zRkfgK44Quumexe6GuzsbMPgHhaUx'

  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${articleSlug}&api-key=${apiKey}`;
  try {
    const response = await axios.get(url);
    console.log("API Response:", response);
    return response.data.response.docs[0];
  } catch (error) {
    console.error(error);
  }
});

export { fetchArticleDetails };
