import { storyblokEditable,StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Hero = ({ blok }) => {
  // console.log("blok hero", blok);

  return (
    <div
      className={`relative min-h-[500px] flex items-center justify-center overflow-hidden ${
        blok.layout === "constrained" ? "container mx-auto" : ""
      } overflow-hidden`}
    >
      {blok?.background_image?.filename && (
        <Image
          alt={blok?.background_image?.alt}
          src={`${blok.background_image.filename}`}
          fill
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        />
      )}
      <div className="relative z-10">
        <div className="[&>h1]:text-6xl [&>h1]:font-black [&>h2]:text-4xl">
          {render(blok.content)}
        </div>
      </div>
    </div>
  );
};

export default Hero;
