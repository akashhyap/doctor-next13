import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

const ImageTextSplit = ({ blok }) => {
  return (
    <div className="mt-16 mb-20" {...storyblokEditable(blok)}>
      <div
        className={`container mx-auto flex flex-wrap md:flex-nowrap gap-8 md:gap-16 px-4 md:px-14 ${
          blok.reverse ? "flex-row-reverse" : ""
        } ${blok.alignItem}`}
      >
        <div className="relative aspect-square md:flex-1">
          <Image
            src={blok?.image?.filename}
            alt=""
            width="800"
            height="800"
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className="md:flex-1">{render(blok.content)}</div>
      </div>
    </div>
  );
};

export default ImageTextSplit;
