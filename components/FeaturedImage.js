import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import React from "react";

const FeaturedImage = ({ blok }) => {
  return (
    <div className="relative z-20" {...storyblokEditable(blok)}>
      <Image
        src={blok?.image?.filename}
        alt=""
        width="800"
        height="800"
        fit="in"
        className="rounded-xl w-full"
      />
    </div>
  );
};

export default FeaturedImage;
