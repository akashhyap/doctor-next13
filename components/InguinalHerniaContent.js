import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getStoryblokApi } from "@storyblok/react/rsc";

const InguinalHerniaContent = ({ initialArticles }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(2); // start with second page
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (page > 1) {
      // Only fetch more articles if it's beyond the first page
      const loadArticles = async () => {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get("cdn/stories", {
          starts_with: "inguinal-hernia/",
          version: "draft",
          cv: Math.random(),
          is_startpage: false,
          per_page: 12,
          page: page,
        });

        if (data?.stories.length < 12) setHasMore(false);
        setArticles((prev) => [...prev, ...data?.stories]);
      };

      loadArticles();
    }
  }, [page]);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12 place-items-start ">
        {articles.map((article) => (
          <ArticleCard
            article={article.content}
            slug={article.full_slug}
            key={article.uuid}
          />
        ))}
      </div>

      <div className="text-center">
        {hasMore && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="text-white bg-black rounded-lg px-3 py-2"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default InguinalHerniaContent;
