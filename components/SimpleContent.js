import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const SimpleContent = ({ blok }) => {
  // console.log("simple content", blok);
  const margin = {
    marginTop: blok?.marginTop,
    marginBottom: blok?.marginBottom,
  }
  return (
    <div {...storyblokEditable(blok)} className={`relative z-10 px-4 sm:px-6 container mx-auto ${blok.maxWidth} ${blok.contentAlign}`} style={margin}>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
};

export default SimpleContent;