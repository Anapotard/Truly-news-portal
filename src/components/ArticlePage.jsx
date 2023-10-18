import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleDetails } from "../store/thunks/fetchArticleDetails";

const ArticlePage = () => {
  const { articleTitle } = useParams(); // Get the article ID from the URL parameter
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.article.article);
  console.log("articleData:", articleData);

  useEffect(() => {
    dispatch(fetchArticleDetails(articleTitle));
  }, [dispatch, articleTitle]);

  if(!articleData) {
    return <div>Loading...</div>
  }

  const xlargeImage = articleData.multimedia.find(
    (item) => item.subtype === "xlarge"
  );
  const imageUrl = xlargeImage
    ? `https://www.nytimes.com/${xlargeImage.url}`
    : null;


  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2x1 mx-auto">
        <img src={imageUrl} alt={articleData.abstract} className="mb-4" />
        <h1 className="text-3x1 font-semibold mb-2">{articleData.abstract}</h1>
        <p className="text-lg mb-4">{articleData.lead_paragraph}</p>
        <p className="text-lg mb-4">{articleData.web_url}</p>

      </div>
    </div>
  );
};

export default ArticlePage;
