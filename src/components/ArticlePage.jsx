import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticlePage = () => {
  const { articleTitle } = useParams(); // Get the article ID from the URL parameter
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${articleTitle}&apiKey=47d4d55af52a478086c76341b429757e`
      );
      console.log(response);
      setArticle(response.data.articles[0]);
    };
    getArticle();
  }, [articleTitle]);

  return (
    <div className="container mx-auto py-36 px-8">
      <div className="shadow-lg rounded-lg">
        <img src={article.urlToImage} alt={article.title} className="mb-4" />
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-lg mb-4">{article.description}</p>
        <p className="text-4xl font-bold mb-4">{article.author}</p>
        <p className="text-lg mb-4">{article.publishedAt}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
