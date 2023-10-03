import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import React from "react";

const Hero = ({ blok }) => {
  console.log("blok hero", blok);
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${blok.minHeight} ${blok.minWidth} overflow-hidden`}
      {...storyblokEditable(blok)}
    >
      {blok?.backgroundImage?.filename && (
        <Image
          src={`${blok?.backgroundImage?.filename}`}
          alt="Background image of hero"
          fill
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        />
      )}
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Hero;
