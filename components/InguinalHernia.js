import ArticleCard from "./ArticleCard";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";

const InguinalHernia = async ({ blok }) => {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/stories", {
    starts_with: "inguinal-hernia/",
    version: "draft",
    cv: Math.random(),
    is_startpage: false,
  });

  let articles = data?.stories.map((a) => {
    a.content.slug = a.slug;
    return a;
  });

  // console.log("inguinal-hernia", articles);

  return (
    <>
      <p className="text-3xl">{blok.title}</p>
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12 place-items-start"
        {...storyblokEditable(blok)}
      >
        { articles?.map((article) => (
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
export default InguinalHernia;


