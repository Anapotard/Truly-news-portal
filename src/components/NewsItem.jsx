import React from "react";

const NewsItem = ({article}) => {
  const {  web_url, abstract, lead_paragraph, multimedia } = article;
  const xlargeImage = multimedia.find((item) => item.subtype === "xlarge");
  const imageUrl = xlargeImage ? `https://www.nytimes.com/${xlargeImage.url}` : null;

  return (
    <div className="news-app">
      <div className="news-item">
        { imageUrl && (
          <img
            className="news-img rounded-t-lg"
            src={imageUrl}
            alt={abstract}
          />
        )}
        <div className="p-5">
          <h3 className="text 3xl font-bold text-slate-700 mb-3">
            <a href={web_url}>{abstract}</a>
          </h3>
          <p className="text-lg font-normal text-gray-600">{lead_paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
