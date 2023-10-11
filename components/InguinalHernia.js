import { StoryblokComponent, getStoryblokApi, storyblokEditable } from "@storyblok/react";
import InguinalHerniaContent from "./InguinalHerniaContent";

const InguinalHernia = async ({ blok }) => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "inguinal-hernia/",
    version: "draft",
    cv: Math.random(),
    is_startpage: false,
    per_page: 12,
    page: 1,
  });

  const initialArticles = data?.stories;

  return (
    <>
      {blok?.content.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
      <div className="max-w-5xl mx-auto px-4 sm:px-6" {...storyblokEditable(blok)}>
        <InguinalHerniaContent initialArticles={initialArticles} />
      </div>
    </>
  );
};

export default InguinalHernia;

