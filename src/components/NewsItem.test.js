import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsItem from "./NewsItem";

describe("NewsItem", () => {
  test("renders the news item with the correct props", () => {
    const title = "Test Title";
    const description = "Test Description";
    const url = "https://www.example.com/article";
    const urlToImage = "https://www.example.com/article.jpg";
    const author = "Test Author";
    const publishedAt = "2021-03-01T00:00:00Z";
    const content = "Content description";

    render(
      <NewsItem
        title={title}
        description={description}
        url={url}
        urlToImage={urlToImage}
        author={author}
        publishedAt={publishedAt}
        content={content}
      />
    );

    // Check that the news item is displayed with the correct props
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(author)).toBeInTheDocument();
    expect(screen.getByText(publishedAt)).toBeInTheDocument();

    const image = screen.getByAltText(urlToImage);
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(urlToImage);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", url);
  });
});
