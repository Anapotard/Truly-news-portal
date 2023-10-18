import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchArticles = createAsyncThunk('articles/fetchArticles',
async () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const beginDate = '20220101'; // Replace with your desired begin date
  const endDate = '20221231';   // Replace with your desired end date


  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${beginDate}&end_date=${endDate}&api-key=${apiKey}`;
  const response = await axios.get(url);
  return response.data;
});

export { fetchArticles };
