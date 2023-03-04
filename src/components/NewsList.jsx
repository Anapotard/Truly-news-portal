import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { Link } from "react-router-dom";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(20);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=47d4d55af52a478086c76341b429757e"
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getNews();
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&sortBy=${sortBy}&apiKey=47d4d55af52a478086c76341b429757e`
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getNews();
  }, [query, sortBy]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const refreshPage = () => {
    window.location.reload(false);
  }

  const loadMore = () => {
    setLimit((prevValue) => prevValue + 4);
  };
  return (
    <div className="container mx-auto py-8 px-8">
      <Link to={"/"}>
        <button
          onClick={refreshPage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 mb-10 flex items-center"
        >
          Back home
        </button>
      </Link>
      <div className="flex items-center mb-8">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for news..."
          className="border p-2 mr-2"
        />
        <select value={sortBy} onChange={handleSortBy} className="border p-2">
          <option value="publishedAt">Sort by title</option>
          <option value="popularity">Sort by popularity</option>
          <option value="relevancy">Sort by relevance</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {articles.slice(0, limit).map((article) => {
          return (
            <div className="shadow-lg rounded-lg">
              <NewsItem
                urlToImage={article.urlToImage}
                title={article.title}
                description={article.description}
                url={article.url}
                author={article.author}
                publishedAt={article.publishedAt}
                content={article.content}
              />
              <Link
                to={`/article/${encodeURIComponent(article.title)}`}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Read more
              </Link>
            </div>
          );
        })}
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 flex items-center"
        onClick={loadMore}
      >
        Load more
      </button>
    </div>
  );
};

export default NewsList;
