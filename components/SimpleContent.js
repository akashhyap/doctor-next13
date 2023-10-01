import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const SimpleContent = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className={`mt-16 mb-20 container mx-auto ${blok.maxWidth}`}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
};

export default SimpleContent;