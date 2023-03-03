import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';

const SearchPage = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('publishedAt');

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=${sortBy}&apiKey=47d4d55af52a478086c76341b429757e`);
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

  return (
    <div className="container mx-auto py-36 px-8">
      <Link to={"/"}>
      <button className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm mb-4">Back home</button>
      </Link>
      <div className="flex items-center mb-8">

        <input type="text" value={query} onChange={handleSearch} placeholder="Search for news..." className="border p-2 mr-2" />
        <select value={sortBy} onChange={handleSortBy} className="border p-2">
          <option value="publishedAt">Sort by date</option>
          <option value="popularity">Sort by popularity</option>
          <option value="relevancy">Sort by relevance</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {articles.map((article) => {
          return (
            <div className="shadow-lg rounded-lg" key={article.url}>
              <NewsItem
                author={article.author}
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
