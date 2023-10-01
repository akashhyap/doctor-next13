import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";

const Article = ({ blok }) => {
  // console.log("blog", blok);

  return (
    <div className="py-10" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => {
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </div>
  );
};

export default Article;
