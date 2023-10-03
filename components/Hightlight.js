import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import React from "react";

const Hightlight = ({ blok }) => {

  const overlayColor = {
    backgroundColor: blok?.overlayColor?.color,
    opacity: blok?.overlayOpacity,
  };
  return (
    <div
      {...storyblokEditable(blok)}
      className={`hightlight relative flex items-center justify-center overflow-hidden min-h-[500px] my-20 ${blok.layout}`}
    >
      <div className="container mx-auto px-4 md:px-3 max-w-6xl relative z-20">
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>

      {blok?.bgImage?.filename && (
        <Image
          src={blok?.bgImage?.filename}
          alt=""
          width="1400"
          height="800"
          fit="in"
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        />
      )}
      {blok?.overlayColor?.color && (
        <div
          className="absolute top-0 right-0 bottom-0 left-0"
          style={overlayColor}
        ></div>
      )}
    </div>
  );
};

export default Hightlight;
