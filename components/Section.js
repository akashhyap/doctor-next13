import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Section = ({ blok }) => {

  return (
    <div {...storyblokEditable(blok)} className={`my-20 container mx-auto ${blok.maxWidth}`}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
};

export default Section;