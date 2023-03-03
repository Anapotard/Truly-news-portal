import React from "react";

const NewsItem = ({
  title,
  description,
  url,
  urlToImage,
  author,
  publishedAt,
  content,
}) => {
  return (
    <div className="news-app">
      <div className="news-item">
        <img
          className="news-img rounded-t-lg"
          src={urlToImage}
          alt={urlToImage}
        />

        <div className="p-5">
          <h3 className="text 3xl font-bold text-slate-700 mb-3">
            <a href={url}>{title}</a>
          </h3>
          <p className="text-lg font-normal text-gray-600">{description}</p>
          <p className="text 3xl font-bold text-slate-700 mb-3">{author}</p>
          <p className="text-lg font-normal text-gray-600">{publishedAt}</p>
          <p className="text-lg font-normal text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
