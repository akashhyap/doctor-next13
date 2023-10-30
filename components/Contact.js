import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { InlineWidget } from "react-calendly";

const Contact = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <div className="inline-widget">
        <InlineWidget url="https://calendly.com/akash-kash/30min" />
      </div>
    </div>
  );
};

export default Contact;
