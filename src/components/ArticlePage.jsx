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


  const { web_url, lead_paragraph, abstract } = articleData;

  return (
    <div className="container mx-auto py-36 px-8">
      <div className="shadow-lg rounded-lg">
        <img src={imageUrl} alt={abstract} className="mb-4" />
        <h1 className="text-4xl font-bold mb-4">{web_url}</h1>
        <p className="text-lg mb-4">{lead_paragraph}</p>

      </div>
    </div>
  );
};

export default ArticlePage;
