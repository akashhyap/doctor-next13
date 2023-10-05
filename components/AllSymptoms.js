import { StoryblokComponent } from "@storyblok/react";
import ArticleCard from "./ArticleCard";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";

const AllSymptoms = async ({ blok }) => {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "inguinal-hernia/symptoms",
    version: "draft",
    cv: Math.random(),
    is_startpage: false,
  });
  // console.log("articles  data", data);

  let articles = data?.stories.map((a) => {
    a.content.slug = a.slug;
    return a;
  });

  return (
    <>
      {blok?.content.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12 place-items-start max-w-5xl mx-auto px-4 sm:px-6"
        {...storyblokEditable(blok)}
      >
        {articles?.map((article) => (
          <ArticleCard
            article={article.content}
            slug={article.full_slug}
            key={article.uuid}
          />
        ))}
      </div>
    </>
  );
};
export default AllSymptoms;