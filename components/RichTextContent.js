import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const RichTextContent = ({ blok }) => {
  const textColor = {
    color: blok?.textColor?.color,
  };

  return (
    <div className={`${blok.alignText}`} style={textColor}>
      {render(blok.content)}
    </div>
  );
};

export default RichTextContent;
